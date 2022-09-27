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
exports.ProduitCommanderController = void 0;
const common_1 = require("@nestjs/common");
const produit_commander_service_1 = require("./produit-commander.service");
const create_produit_commander_dto_1 = require("./dto/create-produit-commander.dto");
const update_produit_commander_dto_1 = require("./dto/update-produit-commander.dto");
let ProduitCommanderController = class ProduitCommanderController {
    constructor(produitCommanderService) {
        this.produitCommanderService = produitCommanderService;
    }
    create(createProduitCommanderDto) {
        return this.produitCommanderService.create(createProduitCommanderDto);
    }
    findAll() {
        return this.produitCommanderService.findAll();
    }
    findOne(id) {
        return this.produitCommanderService.findOne(+id);
    }
    update(id, updateProduitCommanderDto) {
        return this.produitCommanderService.update(+id, updateProduitCommanderDto);
    }
    remove(id) {
        return this.produitCommanderService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_produit_commander_dto_1.CreateProduitCommanderDto]),
    __metadata("design:returntype", void 0)
], ProduitCommanderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProduitCommanderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProduitCommanderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_produit_commander_dto_1.UpdateProduitCommanderDto]),
    __metadata("design:returntype", void 0)
], ProduitCommanderController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProduitCommanderController.prototype, "remove", null);
ProduitCommanderController = __decorate([
    (0, common_1.Controller)('produit-commander'),
    __metadata("design:paramtypes", [produit_commander_service_1.ProduitCommanderService])
], ProduitCommanderController);
exports.ProduitCommanderController = ProduitCommanderController;
//# sourceMappingURL=produit-commander.controller.js.map