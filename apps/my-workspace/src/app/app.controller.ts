import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { GetWorldService } from '@my-workspace/my-nest-lib-2';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly getWorldService: GetWorldService
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
