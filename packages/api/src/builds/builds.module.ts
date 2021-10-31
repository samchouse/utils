import { Module } from '@nestjs/common';
import { BuildsService } from './builds.service';
import { BuildsController } from './builds.controller';
import { S3Module } from '../s3/s3.module';
import { RedisModule } from '../redis/redis.module';

@Module({
  imports: [RedisModule, S3Module],
  controllers: [BuildsController],
  providers: [BuildsService]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class BuildsModule {}
