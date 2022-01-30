import path from "node:path";
import { createWriteStream, createReadStream } from "node:fs";
import axios from "axios";
import FormData from "form-data";
import cloudinary from "cloudinary";
import mime from "mime-types";

export async function downloadImage(
  url: string,
  fileSeed: string
): Promise<string> {
  const exts = ["jpg", "jpeg", "png"];
  return await downloadFile(url, fileSeed, exts);
}

export async function removeBackground(
  filePath: string,
  apiKey: string,
  fileSeed: string
): Promise<string> {
  const formData = new FormData();
  formData.append("size", "small");
  formData.append(
    "image_file",
    createReadStream(filePath),
    path.basename(filePath)
  );

  const response = await axios({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: formData,
    responseType: "stream",
    headers: {
      ...formData.getHeaders(),
      "X-Api-Key": apiKey,
    },
  });

  return new Promise(async (resolve, reject) => {
    const contentType = response.headers["content-type"];
    const ext = contentType.split("/")[1];

    const destPath = path.resolve(
      __dirname,
      "../tmp",
      `${fileSeed}-no-bg.${ext}`
    );
    const writer = createWriteStream(destPath);

    response.data.pipe(writer);

    writer.on("finish", () => resolve(destPath));
    writer.on("error", reject);
  });
}

export async function applyEffects(filePath: string) {
  const uploaded = await cloudinary.v2.uploader.upload(filePath);
  const url = cloudinary.v2.url(uploaded.public_id, {
    width: 800,
    height: 800,
    gravity: "face",
    crop: "crop",
    zoom: "0.7",
    effect: "vectorize:detail:1.0:corners:40:colors:5",
    format: "svg",
  });
  return url;
}

export async function downloadFile(
  url: string,
  destName: string,
  allowedExt?: string[]
): Promise<string> {
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  return new Promise((resolve, reject) => {
    const contentType = response.headers["content-type"];
    const ext = mime.extension(contentType);

    if (!ext) {
      return reject(new Error("Unsupported content type"));
    }

    if (allowedExt && allowedExt.indexOf(ext) === -1) {
      return reject(new Error(`${ext} is an invalid file type`));
    }

    const filePath = path.resolve(__dirname, "../tmp", `${destName}.${ext}`);
    const writer = createWriteStream(filePath);

    response.data.pipe(writer);

    writer.on("finish", () => resolve(filePath));
    writer.on("error", reject);
  });
}
