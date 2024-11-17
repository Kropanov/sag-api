import * as process from 'node:process';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './main.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    app.enableVersioning();
    app.setGlobalPrefix('/api');

    app.enableCors({
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });

    const config = new DocumentBuilder()
        .setTitle('Spells and Gears')
        .setDescription('The Spells and Gears API documentation')
        .setVersion('0.1.1')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'JWT Authentication',
                description: 'Enter JWT token',
                in: 'header',
            },
            'jwt',
        )
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();
