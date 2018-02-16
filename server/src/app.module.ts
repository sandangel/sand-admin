import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppConfig } from './app.config';

@Module({
  controllers: [AppController],
  components: [AppConfig]
})
export class ApplicationModule {}
