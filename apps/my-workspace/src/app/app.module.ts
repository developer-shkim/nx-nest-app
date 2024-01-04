import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetWorldService, MyNestLib2Module } from '@my-workspace/my-nest-lib-2';

@Module({
  imports: [MyNestLib2Module],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'IGetWorldService',
      useClass: GetWorldService,
    },
  ],
})
export class AppModule {}
