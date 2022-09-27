"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const produit_module_1 = require("./produit/produit.module");
const user_module_1 = require("./user/user.module");
const produit_commander_module_1 = require("./produit-commander/produit-commander.module");
const categorie_module_1 = require("./categorie/categorie.module");
const typeorm_1 = require("@nestjs/typeorm");
const configuration_1 = require("./config/configuration");
const config_1 = require("@nestjs/config");
const commune_module_1 = require("./commune/commune.module");
const wilaya_module_1 = require("./wilaya/wilaya.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: process.env.DB_TYPE,
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            produit_module_1.ProduitModule, user_module_1.UserModule, produit_commander_module_1.ProduitCommanderModule, categorie_module_1.CategorieModule, commune_module_1.CommuneModule, wilaya_module_1.WilayaModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map