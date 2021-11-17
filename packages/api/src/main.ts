import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import { fastifyHelmet } from 'fastify-helmet';

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

  await app.register(fastifyHelmet);

  await app.listen(4200);
}

void bootstrap();
