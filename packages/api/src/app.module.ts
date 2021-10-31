import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildsModule } from './builds/builds.module';
import { RedisModule } from './redis/redis.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [ConfigModule.forRoot(), BuildsModule, RedisModule, S3Module],
  controllers: [AppController],
  providers: [AppService]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule {}
