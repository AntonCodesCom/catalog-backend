import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  // init
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // validation
  app.enableCors(); // cors
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');

  // swagger
  const config = new DocumentBuilder()
    .setTitle('Catalog API')
    .setDescription('REST API for the catalog NestJS demo application backend.')
    .setVersion('0.0.1')
    .addTag('product')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // launch
  await app.listen(port);
}
bootstrap();
