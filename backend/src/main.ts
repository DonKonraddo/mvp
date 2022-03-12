import { NestFactory } from '@nestjs/core';

import { AppModule } from '~/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // @ts-ignore
  await app.listen(process.env.APP_PORT);
  // eslint-disable-next-line no-console
  console.log('App is listening on port:', process.env.APP_PORT);
}
bootstrap();
