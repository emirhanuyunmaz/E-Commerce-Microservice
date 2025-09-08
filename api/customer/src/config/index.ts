import dotenv from 'dotenv';

dotenv.config();

export const config = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  SECRET_KEY: process.env.SECRET_KEY,
  MSG_QUEUE_URL: process.env.MSG_QUEUE_URL,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  QUEUE_NAME: process.env.QUEUE_NAME,
  CUSTOMER_SERVICE: process.env.CUSTOMER_SERVICE,
  EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
};
