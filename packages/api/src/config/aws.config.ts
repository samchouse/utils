import { registerAs } from '@nestjs/config';

export default registerAs('aws', () => ({
  accessKeyId: process.env['AWS_ACCESS_KEY_ID'] ?? 'Access Key ID',
  secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'] ?? 'Secret Access Key'
}));
