import Mongoose from "mongoose";
import logger from "./logger";
import { envs } from "../config/env";

let database: Mongoose.Connection;

const connect = async () => {
  const databaseConnectionString = envs.MONGO_URI;

  if (database) {
    return;
  }

  Mongoose.connect(databaseConnectionString)
    .then((connection) => {
      database = connection.connection;
      logger.info("Database Synced");
    })
    .catch((error: any) => {
      logger.error("Error connecting to database: ", error.message);
    });
};

export default connect;
