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
exports.Wilaya = void 0;
const commune_entity_1 = require("../../commune/entities/commune.entity");
const typeorm_1 = require("typeorm");
let Wilaya = class Wilaya {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Wilaya.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], Wilaya.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wilaya.prototype, "nomLatin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wilaya.prototype, "nomArabe", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => commune_entity_1.Commune, (commune) => commune.wilaya),
    __metadata("design:type", Array)
], Wilaya.prototype, "commune", void 0);
Wilaya = __decorate([
    (0, typeorm_1.Entity)()
], Wilaya);
exports.Wilaya = Wilaya;
//# sourceMappingURL=wilaya.entity.js.map