import { Controller, Get, Res, Param } from '@nestjs/common';
import { NextResponse } from 'nest-next-module';

@Controller()
export class PagesController {
  @Get('/about')
  about(@Res() res: NextResponse) {
    return res.nextRender('/about');
  }

  @Get('/test')
  test(@Res() res: NextResponse) {
    return res.nextRender('/test');
  }

  @Get('/i/:id')
  item(@Res() res: NextResponse, @Param('id') id: string) {
    return res.nextRender(`/i/${id}`);
  }
}
