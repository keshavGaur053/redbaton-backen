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
exports.ShowcaseController = void 0;
const common_1 = require("@nestjs/common");
const showcase_service_1 = require("./showcase.service");
const create_showcase_dto_1 = require("./dto/create-showcase.dto");
const update_showcase_dto_1 = require("./dto/update-showcase.dto");
let ShowcaseController = class ShowcaseController {
    constructor(showcaseService) {
        this.showcaseService = showcaseService;
    }
    create(createShowcaseDto) {
        return this.showcaseService.create(createShowcaseDto);
    }
    findAll() {
        return this.showcaseService.findAll();
    }
    findOne(id) {
        return this.showcaseService.findOne(+id);
    }
    update(id, updateShowcaseDto) {
        return this.showcaseService.update(+id, updateShowcaseDto);
    }
    remove(id) {
        return this.showcaseService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_showcase_dto_1.CreateShowcaseDto]),
    __metadata("design:returntype", void 0)
], ShowcaseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShowcaseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShowcaseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_showcase_dto_1.UpdateShowcaseDto]),
    __metadata("design:returntype", void 0)
], ShowcaseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShowcaseController.prototype, "remove", null);
ShowcaseController = __decorate([
    (0, common_1.Controller)('showcase'),
    __metadata("design:paramtypes", [showcase_service_1.ShowcaseService])
], ShowcaseController);
exports.ShowcaseController = ShowcaseController;
//# sourceMappingURL=showcase.controller.js.map