import express, { Request, Response } from 'express';
import {connection} from "./database/connection"
import { CreateChannel } from './utils';
import { expess_app } from './app';
import { config } from './config';

const StartServer = async () => {
  
  const app = express()
  
  await connection()

  const channel = await CreateChannel()
  
  await expess_app(app);

  app.listen(config.PORT, () => {
      console.log(`listening to port ${config.PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
    .on('close', () => {
        channel.close();
    })

}

StartServer()