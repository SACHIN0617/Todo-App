import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case 'test':
    path = join(__dirname, '..', '..', '.env.test');
    break;
  case 'production':
    path = join(__dirname, '..', '..', '.env.production');
    break;
  default:
    path = join(__dirname, '..', '..', '.env.development');
}
dotenv.config({ path });

export const ENV_PATH = path;
export const SECRET_KEY = process.env.SECRET_KEY;
export const JWT_EXPIRY_TIME = process.env.JWT_EXPIRY_TIME || '6h';
export const HOST = process.env.HOST || '';
export const APP_ENV = process.env.APP_ENV || '';
