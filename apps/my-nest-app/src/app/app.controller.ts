import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { GetHelloService } from '@my-workspace/my-nest-lib';
import { GetWorldService } from '@my-workspace/my-nest-lib-2';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly getHelloService: GetHelloService,
    private readonly getWorldService: GetWorldService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('hello')
  getHello() {
    return this.getHelloService.getHello();
  }

  @Get('world')
  getWorld() {
    return this.getWorldService.getWorld();
  }
}
