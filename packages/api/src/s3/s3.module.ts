import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import awsConfig from '../config/aws.config';
import { s3Factory } from './s3.providers';

@Module({
  imports: [ConfigModule.forFeature(awsConfig)],
  providers: [s3Factory],
  exports: [s3Factory]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class S3Module {}
