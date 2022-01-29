import puppeteer from "puppeteer";

const FORMATS: Record<string, { width: number; height: number }> = {
  podcast: { width: 1400, height: 1400 },
  facebook: { width: 1200, height: 630 },
  //   twitter: { width: 1200, height: 675 },
  //   instagram: { width: 1080, height: 1080 },
  //   linkedin: { width: 1200, height: 628 },
  //   story: { width: 1200, height: 1920 },
} as const;

export default async (address: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log(address);
  await page.goto(address);

  for (const key of Object.keys(FORMATS)) {
    await page.setViewport(FORMATS[key]);
    await page.screenshot({ path: `./tmp/${key}.png` });
    await sleep(2000);
  }

  await browser.close();
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
