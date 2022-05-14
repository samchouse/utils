import { ConfigType } from '@nestjs/config';
import Redis from 'ioredis';

import redisConfig from '../config/redis.config';

export const redisFactory = {
  provide: 'REDIS',
  useFactory: (config: ConfigType<typeof redisConfig>): Redis =>
    new Redis({ password: config.password }),
  inject: [redisConfig.KEY]
};
