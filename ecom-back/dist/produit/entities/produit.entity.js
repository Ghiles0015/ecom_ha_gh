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
exports.Produit = void 0;
const categorie_entity_1 = require("../../categorie/entities/categorie.entity");
const produit_commander_entity_1 = require("../../produit-commander/entities/produit-commander.entity");
const typeorm_1 = require("typeorm");
let Produit = class Produit {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Produit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        unique: true,
    }),
    __metadata("design:type", String)
], Produit.prototype, "codeProduit", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Produit.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Produit.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Produit.prototype, "desccription", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], Produit.prototype, "prix", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], Produit.prototype, "image1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], Produit.prototype, "image2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], Produit.prototype, "image3", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Number)
], Produit.prototype, "image4", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => produit_commander_entity_1.ProduitCommander, (produitCommander) => produitCommander.produit),
    __metadata("design:type", Array)
], Produit.prototype, "produitCommander", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categorie_entity_1.Categorie, (categorie) => categorie.produit),
    __metadata("design:type", categorie_entity_1.Categorie)
], Produit.prototype, "categorie", void 0);
Produit = __decorate([
    (0, typeorm_1.Entity)()
], Produit);
exports.Produit = Produit;
//# sourceMappingURL=produit.entity.js.map