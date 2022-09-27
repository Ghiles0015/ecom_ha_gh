"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitCommander = void 0;
const produit_entity_1 = require("../../produit/entities/produit.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let ProduitCommander = class ProduitCommander {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], ProduitCommander.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.produitCommander),
    __metadata("design:type", user_entity_1.User)
], ProduitCommander.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], ProduitCommander.prototype, "produitId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => produit_entity_1.Produit, (produit) => produit.produitCommander),
    __metadata("design:type", produit_entity_1.Produit)
], ProduitCommander.prototype, "produit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProduitCommander.prototype, "quantite", void 0);
ProduitCommander = __decorate([
    (0, typeorm_1.Entity)()
], ProduitCommander);
exports.ProduitCommander = ProduitCommander;
//# sourceMappingURL=produit-commander.entity.js.map