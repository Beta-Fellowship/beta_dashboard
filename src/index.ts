import express, { Express } from "express";
import { config } from "dotenv";
import { Main } from "next/document";
import routes from "./routes";
config();

const app = express();
const port = process.env.PORT || 3001;

const createApp = () : Express => {
  const app = express();
  app.use('/api', routes);
  return app;
}

const main = async () => {
  try {
    const app = createApp();
    app.listen(port, () => console.log(`Running on port ${port}`));
    console.log(`Running in ${process.env.NODE_ENV} mode.`);
  } catch (err) {
    console.error(err);
  }
}

main();