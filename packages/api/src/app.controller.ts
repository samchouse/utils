import { Controller, Get, Redirect } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect()
  public getHome() {
    return this.appService.getHome();
  }
}
