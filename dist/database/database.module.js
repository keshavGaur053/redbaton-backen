"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("../libs/config");
const models_1 = require("./models");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [],
                useFactory: (config) => {
                    return {
                        dialect: 'mysql',
                        host: config.get('MYSQL_HOST') || '127.0.0.1',
                        port: config.get('MYSQL_PORT') || 3306,
                        username: config.get('MYSQL_USERNAME') || 'keshav',
                        password: config.get('MYSQL_PASSWORD') || '',
                        database: config.get('MYSQL_NAME') || 'redbaton',
                        autoLoadModels: true,
                        models: models_1.models,
                        define: {
                            timestamp: true,
                            createdAt: 'created_at',
                            updatedAt: 'updated_at',
                            deletedAt: false,
                            underscored: true,
                        },
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map