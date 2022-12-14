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
exports.Categorie = void 0;
const produit_entity_1 = require("../../produit/entities/produit.entity");
const typeorm_1 = require("typeorm");
let Categorie = class Categorie {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Categorie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Categorie.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Categorie.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => produit_entity_1.Produit, (produit) => produit.categorie),
    __metadata("design:type", Array)
], Categorie.prototype, "produit", void 0);
Categorie = __decorate([
    (0, typeorm_1.Entity)()
], Categorie);
exports.Categorie = Categorie;
//# sourceMappingURL=categorie.entity.js.map