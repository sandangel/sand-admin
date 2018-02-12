import { Module } from '@nestjs/common';
import { join } from 'path';

import { AppController } from './app.controller';

export const DIST_FOLDER = join(process.cwd(), 'dist');
export const DIST_INDEX = join(DIST_FOLDER, 'browser', 'index.html');

@Module({
  components: [{ provide: 'DIST_INDEX', useValue: DIST_INDEX }],
  controllers: [AppController]
})
export class ApplicationModule {}
