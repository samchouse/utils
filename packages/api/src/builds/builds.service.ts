import { Injectable } from '@nestjs/common';
import { CreateBuildDto } from './dto/create-build.dto';

@Injectable()
export class BuildsService {
  public create(_createBuildDto: CreateBuildDto) {
    return 'This action adds a new build';
  }

  public findAll() {
    return `This action returns all builds`;
  }

  public findOne(id: number) {
    return `This action returns a #${id} build`;
  }

  public remove(id: number) {
    return `This action removes a #${id} build`;
  }
}
