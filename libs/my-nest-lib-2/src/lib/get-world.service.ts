import { Injectable } from '@nestjs/common';

@Injectable()
export class GetWorldService {
  async getWorld() {
    return 'World';
  }
}
