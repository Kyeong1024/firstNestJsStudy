import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PositivePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value < 0) {
      throw new HttpException('param should be positive', 400);
    }
    return value;
  }
}
