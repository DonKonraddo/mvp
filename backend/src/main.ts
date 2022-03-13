import { NestFactory } from '@nestjs/core';

import { AppModule } from '~/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // @ts-ignore  Allowed because if APP_PORT is not set app should crashed
  await app.listen(process.env.APP_PORT);
  // eslint-disable-next-line no-console
  console.log(
    '\x1b[32m',
    'App is listening on port:',
    '\x1b[41m',
    process.env.APP_PORT,
    '\x1b[0m',
  );
}
bootstrap();
