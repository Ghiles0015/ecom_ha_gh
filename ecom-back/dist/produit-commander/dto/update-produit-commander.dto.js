"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProduitCommanderDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_produit_commander_dto_1 = require("./create-produit-commander.dto");
class UpdateProduitCommanderDto extends (0, mapped_types_1.PartialType)(create_produit_commander_dto_1.CreateProduitCommanderDto) {
}
exports.UpdateProduitCommanderDto = UpdateProduitCommanderDto;
//# sourceMappingURL=update-produit-commander.dto.js.map