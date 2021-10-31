import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getHome() {
    return {
      url: process.env['FRONTEND_URL'],
      statusCode: 308
    };
  }
}
