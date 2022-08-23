import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: string[] = [];

  create(cat) {
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }
}
