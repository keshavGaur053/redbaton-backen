import { CreateResearchDto } from './dto/create-research.dto';
import { UpdateResearchDto } from './dto/update-research.dto';
export declare class ResearchService {
    create(createResearchDto: CreateResearchDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateResearchDto: UpdateResearchDto): string;
    remove(id: number): string;
}
