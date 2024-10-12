import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const host = configService.get('host');
  await app.listen(5000, host, () => {
    console.log('Running at port host ', host);
  });
}
bootstrap();
