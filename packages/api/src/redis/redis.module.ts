import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import redisConfig from '../config/redis.config';
import { redisFactory } from './redis.providers';

@Module({
  imports: [ConfigModule.forFeature(redisConfig)],
  providers: [redisFactory],
  exports: [redisFactory]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class RedisModule {}
