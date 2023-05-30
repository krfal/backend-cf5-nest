import { Catch, HttpException, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { ProductAlreadyExistsException } from './product/product.exceptions';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof ProductAlreadyExistsException) {
      response.status(409).json({
        statusCode: 409,
        message: 'Product already exists',
      });
    } else if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const message = exception.message;
      response.status(status).json({
        statusCode: status,
        message,
      });
    } else {
      response.status(500).json({
        statusCode: 500,
        message: 'Internal server error',
      });
    }
  }
}
