import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //Entry point is here it looks just like express js
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();
