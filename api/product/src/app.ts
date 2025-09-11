import express, { Application } from 'express';
import cors from 'cors';
// import { CreateChannel } from './utils/index';

export const expess_app = async (app: Application) => {
  app.use(express.json());
  app.use(cors());
  app.use(express.static(__dirname + '/public'));

//   const channel = await CreateChannel();
//   customer(app, channel);
};
