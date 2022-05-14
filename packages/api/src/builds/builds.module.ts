import { Module } from '@nestjs/common';

import { RedisModule } from '../redis/redis.module';
import { S3Module } from '../s3/s3.module';
import { BuildsController } from './builds.controller';
import { BuildsService } from './builds.service';

@Module({
  imports: [RedisModule, S3Module],
  controllers: [BuildsController],
  providers: [BuildsService]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class BuildsModule {}
