import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  DEFAULT_API_PREFIX: get("DEFAULT_API_PREFIX").required().asString(),
  NODE_ENV: get("NODE_ENV").default("development").asString(),
  LOCAL_DOMAIN: get("LOCAL_DOMAIN").required().asString(),
  PROD_DOMAIN: get("PROD_DOMAIN").required().asString(),
  JWT_SECRET: get("JWT_SECRET").required().asString(),
  MONGO_URI: get("MONGO_URI").required().asString(),
  SUBMIT_SERVICE: get("SUBMIT_SERVICE").required().asString(),
  DELIVER_SERVICE: get("DELIVER_SERVICE").required().asString(),
};
