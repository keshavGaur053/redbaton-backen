"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const APPLICATION_NAME = "redbaton";
    const APPPLICATION_DESCRIPTION = 'redbaton website admin portal';
    const FIRST_ADMIN_EMAIL = 'keshav.gaur@redbaton.in';
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = process.env.API_PREFIX || '';
    if (globalPrefix) {
        app.setGlobalPrefix(globalPrefix);
    }
    const options = new swagger_1.DocumentBuilder()
        .setTitle(APPLICATION_NAME)
        .setDescription(APPPLICATION_DESCRIPTION)
        .setVersion('1.0')
        .addBearerAuth({
        description: `Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
    }, 'token').build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map