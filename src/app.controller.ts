import { Controller, Get, Res } from '@nestjs/common';
import { NextResponse } from 'nest-next-module';

@Controller()
export class AppController {
  @Get()
  index(@Res() res: NextResponse) {
    return res.nextRender('/index');
  }
}
