import { Injectable } from '@nestjs/common';

@Injectable()
export class GetWorldService {
  getWorld() {
    return 'World';
  }
}
