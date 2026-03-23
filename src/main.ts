import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('My CRM')
    .setDescription('An Enterprise NestJS API')
    .setVersion('v1')
    .setLicense('License by You', '')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter JWT token',
      },
      'Bearer',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Inject manual contact (karena tidak ada method lagi)
  document.info.contact = {
    name: 'Your Name',
    email: 'your@email.com',
  };

  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();