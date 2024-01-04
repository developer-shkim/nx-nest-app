import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GetHelloService, MyNestLibModule } from '@my-workspace/my-nest-lib';
import { GetWorldService, MyNestLib2Module } from '@my-workspace/my-nest-lib-2';

@Module({
  imports: [MyNestLibModule, MyNestLib2Module],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'IGetHelloService',
      useClass: GetHelloService,
    },
    {
      provide: 'IGetWorldService',
      useClass: GetWorldService,
    },
  ],
})
export class AppModule {}
