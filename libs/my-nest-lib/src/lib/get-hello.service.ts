import { Injectable } from '@nestjs/common';

@Injectable()
export class GetHelloService {
  getHello() {
    return 'Hello';
  }
}
