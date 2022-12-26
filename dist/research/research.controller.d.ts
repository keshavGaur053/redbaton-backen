import { ResearchService } from './research.service';
import { CreateResearchDto } from './dto/create-research.dto';
import { UpdateResearchDto } from './dto/update-research.dto';
export declare class ResearchController {
    private readonly researchService;
    constructor(researchService: ResearchService);
    create(createResearchDto: CreateResearchDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateResearchDto: UpdateResearchDto): string;
    remove(id: string): string;
}
