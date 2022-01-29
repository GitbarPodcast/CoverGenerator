import { PROMPTS } from "./consts";
import prompts from "prompts";
import * as cloudinary from "cloudinary";
import server from "./server";
import printer from "./printer";

import dotenv from "dotenv";
import {
  applyEffects,
  downloadImage,
  removeBackground,
  downloadFile,
} from "./fileUtils";
import { randomUUID } from "crypto";

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

(async function () {
  let response: any;
  response = await prompts(PROMPTS);

  const tempFileSeed = randomUUID();
  const rawImage = await downloadImage(response.image, tempFileSeed);

  if (!process.env.REMOVE_BG_API_KEY) {
    throw new Error("REMOVE_BG_API_KEY is not set");
  }

  let alphaImage;
  if (response.removeBG) {
    alphaImage = await removeBackground(
      rawImage,
      process.env.REMOVE_BG_API_KEY,
      tempFileSeed
    );
  } else {
    alphaImage = rawImage;
  }
  const url = await applyEffects(alphaImage);

  response.image = url;

  await downloadFile(url, "dest");

  await server(response, printer);
})();

function print() {}
