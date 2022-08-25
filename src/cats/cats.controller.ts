import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpStatus,
  Ip,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UseFilters,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Request, Response } from 'express';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';
import { PositivePipe } from 'src/common/pipes/validation.pipe';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { CreateCatDto } from './create-cat.dto';
import { CreateValidationPipe } from 'src/common/pipes/create-validation.pipe';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
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
  findOne(@Param('id', PositivePipe) id: number, @Ip() ip) {
    console.log({ ip });
  }

  @Post()
  create(
    @Res() res: Response,
    @Req() req: Request,
    @Body() body: CreateCatDto,
  ) {
    /*
      {
        name: string,
        age: number
      }
    */
    // console.log({ body });

    this.catsService.create(body);
  }
}
