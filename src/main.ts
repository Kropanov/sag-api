import * as process from 'node:process';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './main.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('/api');

    app.enableCors({
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });

    const config = new DocumentBuilder()
        .setTitle('Spells and Gears')
        .setDescription('The Spells and Gears API documentation')
        .setVersion('0.0.2')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();
