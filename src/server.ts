import app from "./app";
import { envs } from "./config/env";
import logger from "./util/logger";
import connect from "./util/database.connection";

app.listen(envs.PORT, () => {
  logger.info(`Starting on ${envs.NODE_ENV} Environment`);
  // Connect to Database
  connect();
  logger.info(`API Server up and running on PORT ${envs.PORT}`);
});
