import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: true, // Permitir todas as origens
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Permitir todos os métodos
    credentials: true, // Permitir credenciais de autenticação (cookies, cabeçalhos de autorização, etc.)
    preflightContinue: false, // Desativar a resposta a requisições OPTIONS pré-voo
    optionsSuccessStatus: 204, // Definir o status de sucesso para 204
  });

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
