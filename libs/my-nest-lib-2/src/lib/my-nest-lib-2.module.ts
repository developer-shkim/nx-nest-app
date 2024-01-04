import { Module } from '@nestjs/common';
import { GetWorldService } from './get-world.service';

@Module({
  controllers: [],
  providers: [GetWorldService],
  exports: [GetWorldService],
})
export class MyNestLib2Module {}
