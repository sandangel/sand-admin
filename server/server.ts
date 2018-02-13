import 'reflect-metadata';
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as cors from 'cors';
import * as express from 'express';
import { join } from 'path';

import { ApplicationModule } from './src/app.module';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Start up the Node server
async function bootstrap() {
  const PORT = Number(process.env.PORT) || 4000;
  const DIST_FOLDER = join(process.cwd(), 'dist');
  const app = express();

  // * NOTE :: leave this as require() since this file is built Dynamically from webpack
  const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(join(DIST_FOLDER, 'server', 'main.bundle'));

  app.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModuleNgFactory,
      providers: [provideModuleMap(LAZY_MODULE_MAP)]
    })
  );

  app.set('view engine', 'html');
  app.set('views', join(DIST_FOLDER, 'browser'));

  // Server static files from /browser
  app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

  const corsOptions: cors.CorsOptions = {
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'x-xsrf-token'],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: ['http://localhost:4200', 'http://localhost:4000'],
    preflightContinue: false,
    optionsSuccessStatus: 200
  };

  app.options('*', cors(corsOptions));

  const server = await NestFactory.create(ApplicationModule, app);

  await server.listen(PORT);
}

bootstrap();
