import { Component } from '@nestjs/common';
import { join } from 'path';
const DIST_FOLDER = join(process.cwd(), 'dist');
const DIST_INDEX = join(DIST_FOLDER, 'browser', 'index.html');

@Component()
export class AppConfig {
  dist = DIST_INDEX;
}
