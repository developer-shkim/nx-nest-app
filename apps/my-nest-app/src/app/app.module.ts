import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MyNestLibModule } from '@my-workspace/my-nest-lib';
import { MyNestLib2Module } from '@my-workspace/my-nest-lib-2';

@Module({
  imports: [MyNestLibModule, MyNestLib2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
