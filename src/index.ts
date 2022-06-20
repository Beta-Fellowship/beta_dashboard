import { config } from "dotenv";
import { createApp } from './utils/createApp';
config();

const port = process.env.PORT || 3001;

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