import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BuildsService } from './builds.service';
import { CreateBuildDto } from './dto/create-build.dto';

@Controller('builds')
export class BuildsController {
  public constructor(private readonly buildsService: BuildsService) {}

  @Post()
  public create(@Body() createBuildDto: CreateBuildDto) {
    return this.buildsService.create(createBuildDto);
  }

  @Get()
  public findAll() {
    return this.buildsService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.buildsService.findOne(Number(id));
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.buildsService.remove(Number(id));
  }
}
