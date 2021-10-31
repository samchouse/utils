import { Res, Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { AdminGuard } from '../guard/admin.guard';
import { BuildsService } from './builds.service';

@Controller('builds')
export class BuildsController {
  public constructor(private readonly buildsService: BuildsService) {}

  @Get('/android/latest')
  public async findAndroidLatest(@Res() res: FastifyReply) {
    return this.buildsService.findAndroidLatest(res);
  }

  @Get('/android/:hash')
  public async findAndroidId(
    @Res() res: FastifyReply,
    @Param('hash') hash: string
  ) {
    return this.buildsService.findAndroidId(res, hash);
  }

  @Get('/android/update')
  @UseGuards(AdminGuard)
  public async updateAndroid(@Res() res: FastifyReply) {
    return this.buildsService.updateAndroid(res);
  }

  @Delete('/android/:hash')
  @UseGuards(AdminGuard)
  public async removeAndroidId(
    @Res() res: FastifyReply,
    @Param('hash') hash: string
  ) {
    return this.buildsService.removeAndroidId(res, hash);
  }
}
