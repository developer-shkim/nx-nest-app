import { Controller, Get, Inject } from '@nestjs/common';

import { AppService } from './app.service';
import { IGetWorldService } from './get-world-service.interface';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('IGetWorldService')
    private readonly getWorldService: IGetWorldService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/world')
  getWorld() {
    return this.getWorldService.getWorld();
  }
}
