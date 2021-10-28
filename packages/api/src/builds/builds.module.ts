import { Module } from '@nestjs/common';
import { BuildsService } from './builds.service';
import { BuildsController } from './builds.controller';

@Module({
  controllers: [BuildsController],
  providers: [BuildsService]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class BuildsModule {}
