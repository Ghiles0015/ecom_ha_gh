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
exports.CommuneController = void 0;
const common_1 = require("@nestjs/common");
const commune_service_1 = require("./commune.service");
const create_commune_dto_1 = require("./dto/create-commune.dto");
const update_commune_dto_1 = require("./dto/update-commune.dto");
let CommuneController = class CommuneController {
    constructor(communeService) {
        this.communeService = communeService;
    }
    create(createCommuneDto) {
        return this.communeService.create(createCommuneDto);
    }
    findAll() {
        return this.communeService.findAll();
    }
    findOne(id) {
        return this.communeService.findOne(+id);
    }
    update(id, updateCommuneDto) {
        return this.communeService.update(+id, updateCommuneDto);
    }
    remove(id) {
        return this.communeService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_commune_dto_1.CreateCommuneDto]),
    __metadata("design:returntype", void 0)
], CommuneController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommuneController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommuneController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_commune_dto_1.UpdateCommuneDto]),
    __metadata("design:returntype", void 0)
], CommuneController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommuneController.prototype, "remove", null);
CommuneController = __decorate([
    (0, common_1.Controller)('commune'),
    __metadata("design:paramtypes", [commune_service_1.CommuneService])
], CommuneController);
exports.CommuneController = CommuneController;
//# sourceMappingURL=commune.controller.js.map