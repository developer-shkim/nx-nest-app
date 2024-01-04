import { Injectable } from '@nestjs/common';

@Injectable()
export class GetHelloService {
  async getHello() {
    return 'Hello';
  }
}
