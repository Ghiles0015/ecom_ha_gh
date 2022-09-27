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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitController = void 0;
const common_1 = require("@nestjs/common");
const produit_service_1 = require("./produit.service");
const create_produit_dto_1 = require("./dto/create-produit.dto");
const update_produit_dto_1 = require("./dto/update-produit.dto");
let ProduitController = class ProduitController {
    constructor(produitService) {
        this.produitService = produitService;
    }
    create(createProduitDto) {
        return this.produitService.create(createProduitDto);
    }
    findAll() {
        return this.produitService.findAll();
    }
    findOne(id) {
        return this.produitService.findOne(+id);
    }
    update(id, updateProduitDto) {
        return this.produitService.update(+id, updateProduitDto);
    }
    remove(id) {
        return this.produitService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_produit_dto_1.CreateProduitDto]),
    __metadata("design:returntype", void 0)
], ProduitController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProduitController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProduitController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_produit_dto_1.UpdateProduitDto]),
    __metadata("design:returntype", void 0)
], ProduitController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProduitController.prototype, "remove", null);
ProduitController = __decorate([
    (0, common_1.Controller)('produit'),
    __metadata("design:paramtypes", [produit_service_1.ProduitService])
], ProduitController);
exports.ProduitController = ProduitController;
//# sourceMappingURL=produit.controller.js.map