import express from "express";
import devBundle from "./devBundle.js"; // comment this line  when you are working in production mode
import { Configuration, OpenAIApi } from "openai";
import { startScrape } from "./utils/scrapper.js";

import dotenv from "dotenv";
dotenv.config();
startScrape;

const { OPEN_API_KEY } = process.env;
const app = express();

devBundle.compile(app); // comment this line when you are working in production mode

import path from "path";

const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

import template from "./../template";
app.get("/", startScrape, async (req, res) => {
  try {
    res.status(200).send(template());
  } catch (error) {}
});

let port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", port);
});
