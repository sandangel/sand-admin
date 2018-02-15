import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { join } from 'path';

const DIST_FOLDER = join(process.cwd(), 'dist');
const DIST_INDEX = join(DIST_FOLDER, 'browser', 'index.html');

import { DIST_TOKEN } from './token';

@Module({
  controllers: [AppController],
  components: [{ provide: DIST_TOKEN, useFactory: () => DIST_INDEX }]
})
export class ApplicationModule {}
