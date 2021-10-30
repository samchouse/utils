import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true })
  );
  await app.listen(4200);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

void bootstrap();
