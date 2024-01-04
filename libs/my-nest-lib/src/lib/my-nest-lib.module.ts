import { Module } from '@nestjs/common';
import { GetHelloService } from './get-hello.service';

@Module({
  controllers: [],
  providers: [GetHelloService],
  exports: [GetHelloService],
})
export class MyNestLibModule {}
