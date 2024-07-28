import path from "node:path";
import puppeteer from "puppeteer";

const FORMATS: Record<string, { width: number; height: number }> = {
  podcast: { width: 1400, height: 1400 },
  youtube: { width: 2560, height: 1440 },
} as const;

export default async (address: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log(address);
  await page.goto(address);

  for (const key of Object.keys(FORMATS)) {
    await page.setViewport(FORMATS[key]);
    await page.screenshot({
      path: path.resolve(__dirname, `../../../cover/${key}.png`),
    });
    await sleep(2000);
  }

  await browser.close();
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
