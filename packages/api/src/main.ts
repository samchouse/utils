import { fastifyHelmet } from '@fastify/helmet';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

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

  // @ts-expect-error
  await app.register(fastifyHelmet);

  await app.listen(4200);
}

void bootstrap();
