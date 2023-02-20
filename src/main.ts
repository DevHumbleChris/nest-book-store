import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://book-store-ke.vercel.app/',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
