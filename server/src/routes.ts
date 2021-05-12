import { Application, Router } from 'express';
import { PingController } from './controllers/PingController';
import { IndexController } from './controllers/IndexController';

const availableRoutes: [string, Router][] = [
  ['/', IndexController],
  ['/ping', PingController],
];

export const routes = (app: Application) => {
  availableRoutes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
