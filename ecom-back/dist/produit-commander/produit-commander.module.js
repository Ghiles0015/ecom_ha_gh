"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitCommanderModule = void 0;
const common_1 = require("@nestjs/common");
const produit_commander_service_1 = require("./produit-commander.service");
const produit_commander_controller_1 = require("./produit-commander.controller");
let ProduitCommanderModule = class ProduitCommanderModule {
};
ProduitCommanderModule = __decorate([
    (0, common_1.Module)({
        controllers: [produit_commander_controller_1.ProduitCommanderController],
        providers: [produit_commander_service_1.ProduitCommanderService]
    })
], ProduitCommanderModule);
exports.ProduitCommanderModule = ProduitCommanderModule;
//# sourceMappingURL=produit-commander.module.js.map