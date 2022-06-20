import express from "express";
import { config } from "dotenv";
import { Main } from "next/document";
config();

const app = express();
const port = process.env.PORT || 3001;

const main = async () => {
  try {
    app.listen(port, () => console.log(`Running on port ${port}`));
    console.log(`Running in ${process.env.NODE_ENV} mode.`);
  } catch (err) {
    console.error(err);
  }
}

main();