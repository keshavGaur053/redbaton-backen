"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResearchDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_research_dto_1 = require("./create-research.dto");
class UpdateResearchDto extends (0, mapped_types_1.PartialType)(create_research_dto_1.CreateResearchDto) {
}
exports.UpdateResearchDto = UpdateResearchDto;
//# sourceMappingURL=update-research.dto.js.map