import { request } from "http";
import { THEMES, VARIANTS } from "./../src/theme";
import fastify from "fastify";
import fastifyStatic from "fastify-static";
import * as path from "path";
import * as pfs from "fs/promises";
import * as fs from "fs";
import chalk from "chalk";
import prompts from "prompts";
import axios from "axios";
import FormData from "form-data";
import * as cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

(async function () {
  let cover = {
    name: null,
    surname: null,
    episodeNumber: null,
    imageUrl: null,
    generateImage: false,
    theme: null,
  };

  let response: any;

  console.log(`${chalk.blue("Welcome")} in the cover generator!`);
  response = await prompts([
    {
      type: "text",
      name: "name",
      message: "Name of the guest or title",
      validate: (value: string) =>
        value.length > 2 ? true : "Name is required",
    },
    {
      type: "text",
      name: "surname",
      message: "Surname of the guest or subtitle",
      validate: (value: string) =>
        value.length > 2 ? true : "Surname is required",
    },
    {
      type: "number",
      name: "episodeNumber",
      message: "Episode Number",
    },
    {
      type: "text",
      name: "company",
      message: "Guest's company",
      validate: (value: string) =>
        value.length > 2 ? true : "Company is required",
    },
    {
      type: "text",
      name: "image",
      message: "Image",
      validate: (value: string) =>
        value.length > 2 ? true : "Image is required",
    },
    {
      type: "confirm",
      name: "imageParse",
      message: "Do you want to edit image?",
      initial: true,
    },
    {
      type: "select",
      name: "theme",
      message: "Pick theme",
      choices: [
        { title: "auto", value: null },
        ...Object.keys(THEMES).map((e) => ({ title: e, value: e })),
      ],
    },
    {
      type: "select",
      name: "variant",
      message: "Pick variant",
      choices: [
        { title: "auto", value: null },
        ...Object.keys(VARIANTS).map((e) => ({ title: e, value: e })),
      ],
    },
  ]);

  if (response.imageParse) {
    try {
      await downloadBG(response.image);
      await removeBG();

      response.image = await applyEffects();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  const injectHtml = `
  <script>
    window.__COVER__ = ${JSON.stringify(response)}
  </script>
`;

  const server = fastify({ logger: { level: "trace" } });

  server.register(fastifyStatic, {
    root: path.join(__dirname, "../dist"),
    index: false,
  });

  server.get("/", async (request, reply) => {
    const html = (
      await pfs.readFile(path.join(__dirname, "../dist/index.html"), "utf8")
    ).replace("<title>Vite App</title>", injectHtml);
    reply.type("text/html").send(html);
  });

  server.listen(8080, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
})();

async function downloadBG(url: string) {
  const p = path.resolve(__dirname, "../tmp", "bg.png");
  const writer = fs.createWriteStream(p);

  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

async function removeBG() {
  const p = path.resolve(__dirname, "../tmp", "bg.png");
  const dest = path.resolve(__dirname, "../tmp", "no-bg.png");
  const formData = new FormData();
  formData.append("size", "small");
  formData.append("image_file", fs.createReadStream(p), path.basename(p));

  const response = await axios({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: formData,
    responseType: "arraybuffer",
    headers: {
      ...formData.getHeaders(),
      "X-Api-Key": process.env.REMOVEBG_API_KEY ?? "",
    },
  });

  fs.writeFileSync(dest, response.data);
}

async function applyEffects() {
  const source = path.resolve(__dirname, "../tmp", "no-bg.png");
  const a = await cloudinary.v2.uploader.upload(source);
  const url = await cloudinary.v2.url(a.public_id, {
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
