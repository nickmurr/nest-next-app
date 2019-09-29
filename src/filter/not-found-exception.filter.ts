import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { NextResponse } from 'nest-next-module';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const res: NextResponse = ctx.getResponse();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    return res.nextRender('/error');
  }
}
