import { Controller, Get, Req, Res, Inject } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('*')
export class AppController {
  renderCache: { [key: string]: string } = {};

  constructor(@Inject('DIST_INDEX') private distIndex: string) {}

  @Get()
  routesRender(@Req() req: Request, @Res() res: Response) {
    if (this.renderCache[req.originalUrl]) {
      return res.send(this.renderCache[req.originalUrl]);
    }

    return res.render(this.distIndex, { req }, (err, html) => {
      if (err) {
        console.error(err);
      }

      this.renderCache[req.originalUrl] = html;
      return res.send(html);
    });
  }
}
