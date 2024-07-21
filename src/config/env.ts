import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  DEFAULT_API_PREFIX: get('DEFAULT_API_PREFIX').required().asString(),
  NODE_ENV: get('NODE_ENV').default('development').asString(),
  LOCAL_DOMAIN: get('LOCAL_DOMAIN').required().asString(),
  PROD_DOMAIN: get('PROD_DOMAIN').required().asString(),
  BACKEND_DOMAIN: get('BACKEND_DOMAIN').required().asString(),
};