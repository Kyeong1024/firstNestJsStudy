import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat-dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    /*
      {
        name: string,
        age: number
      }
    */

    this.catsService.create(createCatDto);
  }
}
