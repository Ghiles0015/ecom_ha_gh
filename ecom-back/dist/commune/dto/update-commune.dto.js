"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommuneDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_commune_dto_1 = require("./create-commune.dto");
class UpdateCommuneDto extends (0, mapped_types_1.PartialType)(create_commune_dto_1.CreateCommuneDto) {
}
exports.UpdateCommuneDto = UpdateCommuneDto;
//# sourceMappingURL=update-commune.dto.js.map