import { Inject, Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { FastifyReply } from 'fastify';
import Redis from 'ioredis';
import escapeRegExp from 'lodash.escaperegexp';

@Injectable()
export class BuildsService {
  public constructor(
    @Inject('REDIS') private readonly redis: Redis,
    @Inject('S3') private readonly s3: S3
  ) {}

  private async send404(res: FastifyReply, err: string) {
    return res.status(404).send({ success: false, message: err });
  }

  private async sendFile(
    res: FastifyReply,
    platform: 'ios' | 'android',
    filename: string,
    file: string
  ) {
    return (
      res
        .header(
          'Content-Type',
          platform === 'ios'
            ? 'application/octet-stream'
            : 'application/vnd.android.package-archive'
        )
        .header(
          'Content-Disposition',
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `attachment; filename="${filename}"`
        )
        .status(200)
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        .send(Buffer.from(file, 'base64'))
    );
  }

  public async findAndroidLatest(res: FastifyReply) {
    const cachedKey = (await this.redis.keys('android-latest:*'))[0];
    if (cachedKey) {
      const cached = await this.redis.get(cachedKey);
      if (cached)
        return this.sendFile(
          res,
          'android',
          cachedKey
            .replace('android-latest:', '')
            .replace(/builds\/android\/[\d\.]+\//, ''),
          cached
        );
    }

    const builds = await this.s3
      .listObjectsV2({ Bucket: 'xenfo-utils', Prefix: 'builds/android' })
      .promise()
      .catch(() => null);

    if (!builds) return this.send404(res, 'Something went wrong');

    const build = builds.Contents?.sort(
      (a, b) =>
        (b.LastModified?.getTime() ?? 0) - (a.LastModified?.getTime() ?? 0)
    )[0];

    if (!build || !build.Key) return this.send404(res, 'No builds found');

    const file = await this.s3
      .getObject({ Bucket: 'xenfo-utils', Key: build.Key })
      .promise()
      .catch(() => null);

    if (!file || !file.Body) return this.send404(res, 'Could not fetch build');

    await this.redis.set(
      `android-latest:${build.Key}`,
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      file.Body.toString('base64')
    );

    return this.sendFile(
      res,
      'android',
      build.Key.replace(/builds\/android\/[\d\.]+\//, ''),
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      file.Body.toString('base64')
    );
  }

  public async findAndroidId(res: FastifyReply, hash: string) {
    const cachedKey = (await this.redis.keys('android:*')).filter(
      (key) => key.search(escapeRegExp(hash)) !== -1
    )[0];
    if (cachedKey) {
      const cached = await this.redis.get(cachedKey);
      if (cached)
        return this.sendFile(
          res,
          'android',
          cachedKey
            .replace('android:', '')
            .replace(/builds\/android\/[\d\.]+\//, ''),
          cached
        );
    }

    const builds = await this.s3
      .listObjectsV2({ Bucket: 'xenfo-utils', Prefix: 'builds/android' })
      .promise()
      .catch(() => null);

    if (!builds) return this.send404(res, 'Something went wrong');

    const build = builds.Contents?.sort(
      (a, b) =>
        (b.LastModified?.getTime() ?? 0) - (a.LastModified?.getTime() ?? 0)
    ).filter((a) => a.Key && a.Key.search(escapeRegExp(hash)) !== -1)[0];

    if (!build || !build.Key) return this.send404(res, 'No builds found');

    const file = await this.s3
      .getObject({ Bucket: 'xenfo-utils', Key: build.Key })
      .promise()
      .catch(() => null);

    if (!file || !file.Body) return this.send404(res, 'Could not fetch build');

    await this.redis.set(
      `android:${build.Key}`,
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      file.Body.toString('base64'),
      'EX',
      60 * 60
    );

    return this.sendFile(
      res,
      'android',
      build.Key.replace(/builds\/android\/[\d\.]+\//, ''),
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      file.Body.toString('base64')
    );
  }

  public async updateAndroid(res: FastifyReply) {
    const latestCachedKey = (await this.redis.keys('android-latest:*'))[0];

    if (latestCachedKey) await this.redis.del(latestCachedKey);

    const builds = await this.s3
      .listObjectsV2({ Bucket: 'xenfo-utils', Prefix: 'builds/android' })
      .promise()
      .catch(() => null);

    if (!builds) return this.send404(res, 'Something went wrong');

    const build = builds.Contents?.sort(
      (a, b) =>
        (b.LastModified?.getTime() ?? 0) - (a.LastModified?.getTime() ?? 0)
    )[0];

    if (!build || !build.Key) return this.send404(res, 'No builds found');

    const file = await this.s3
      .getObject({ Bucket: 'xenfo-utils', Key: build.Key })
      .promise()
      .catch(() => null);

    if (!file || !file.Body) return this.send404(res, 'Could not fetch build');

    await this.redis.set(
      `android-latest:${build.Key}`,
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      file.Body.toString('base64')
    );

    return res.status(200).send({ success: true });
  }

  public async removeAndroidId(res: FastifyReply, hash: string) {
    const cachedKey = (await this.redis.keys('android:*')).filter(
      (key) => key.search(escapeRegExp(hash)) !== -1
    )[0];
    const latestCachedKey = (await this.redis.keys('android-latest:*')).filter(
      (key) => key.search(escapeRegExp(hash)) !== -1
    )[0];

    if (cachedKey) await this.redis.del(cachedKey);
    if (latestCachedKey) await this.redis.del(latestCachedKey);

    const builds = await this.s3
      .listObjectsV2({ Bucket: 'xenfo-utils', Prefix: 'builds/android' })
      .promise()
      .catch(() => null);

    if (!builds) return this.send404(res, 'Something went wrong');

    const build = builds.Contents?.sort(
      (a, b) =>
        (b.LastModified?.getTime() ?? 0) - (a.LastModified?.getTime() ?? 0)
    ).filter((a) => a.Key && a.Key.search(escapeRegExp(hash)) !== -1)[0];

    if (!build || !build.Key) return this.send404(res, 'No builds found');

    const file = await this.s3
      .deleteObject({ Bucket: 'xenfo-utils', Key: build.Key })
      .promise()
      .catch(() => null);

    if (!file) return this.send404(res, 'Could not delete build');

    return res.status(200).send({ success: true });
  }
}
