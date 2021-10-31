import { S3 } from 'aws-sdk';
import { ConfigType } from '@nestjs/config';

import awsConfig from '../config/aws.config';

export const s3Factory = {
  provide: 'S3',
  useFactory: (config: ConfigType<typeof awsConfig>): S3 => {
    return new S3({
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey
    });
  },
  inject: [awsConfig.KEY]
};
