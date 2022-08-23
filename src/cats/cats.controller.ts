import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat-dto';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(@Req() req: Request, @Res() res: Response) {
    const data = this.catsService.findAll();
    res.json(data);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    console.log(id);
  }

  @Post()
  create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createCatDto: CreateCatDto,
  ) {
    /*
      {
        name: string,
        age: number
      }
    */

    this.catsService.create(createCatDto);
  }
}
