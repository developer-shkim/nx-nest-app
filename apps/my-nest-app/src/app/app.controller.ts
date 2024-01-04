import { Controller, Get, Inject } from '@nestjs/common';

import { AppService } from './app.service';
import { IGetHelloService } from './get-hello-service.interface';
import { IGetWorldService } from './get-world-service.interface';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('IGetHelloService')
    private readonly getHelloService: IGetHelloService,
    @Inject('IGetWorldService')
    private readonly getWorldService: IGetWorldService
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
