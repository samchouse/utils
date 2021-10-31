import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => ({
  password: process.env['REDIS_PASSWORD'] ?? 'Redis'
}));
