import { Puppeteer } from "puppeteer";

const startScrape = async (req, res, next) => {
  console.log("start scraping");
  next();
};

export { startScrape };
