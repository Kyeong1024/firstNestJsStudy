import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpStatus,
  Ip,
  Param,
  Post,
  Req,
  Res,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat-dto';
import { Request, Response } from 'express';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';

@Controller('cats')
// @UseFilters(new HttpExceptionFilter()) //filter 주입
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const data = this.catsService.findAll();
    res.status(HttpStatus.OK);

    return data;
  }

  @Get('/:id')
  findOne(@Param('id') id: string, @Ip() ip) {
    console.log({ id, ip });
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
