import 'dotenv/config'
import { get } from 'env-var'


export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  MONGODB_URL: get('MONGODB_URL').required().asString(),
  MONGODB_NAME: get('MONGODB_NAME').required().asString()
}



