import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import { fastifyHelmet } from 'fastify-helmet';

import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true })
  );

  app.enableCors({
    credentials: true,
    origin: process.env['FRONTEND_URL'],
    methods: ['GET', 'POST', 'DELETE']
  });

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  await app.register(fastifyHelmet);

  await app.listen(4200);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

void bootstrap();
