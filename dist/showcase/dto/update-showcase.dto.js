"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShowcaseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_showcase_dto_1 = require("./create-showcase.dto");
class UpdateShowcaseDto extends (0, mapped_types_1.PartialType)(create_showcase_dto_1.CreateShowcaseDto) {
}
exports.UpdateShowcaseDto = UpdateShowcaseDto;
//# sourceMappingURL=update-showcase.dto.js.map