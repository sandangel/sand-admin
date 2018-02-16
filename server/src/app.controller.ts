import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppConfig } from './app.config';

@Controller('*')
export class AppController {
  renderCache: { [key: string]: string } = {};

  constructor(private config: AppConfig) {}

  @Get()
  routesRender(@Req() req: Request, @Res() res: Response) {
    if (this.renderCache[req.originalUrl]) {
      return res.send(this.renderCache[req.originalUrl]);
    }

    return res.render(this.config.dist, { req }, (err, html) => {
      if (err) {
        console.error(err);
      }

      this.renderCache[req.originalUrl] = html;
      return res.send(html);
    });
  }
}
