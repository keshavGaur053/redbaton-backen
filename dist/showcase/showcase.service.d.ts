import { CreateShowcaseDto } from './dto/create-showcase.dto';
import { UpdateShowcaseDto } from './dto/update-showcase.dto';
export declare class ShowcaseService {
    create(createShowcaseDto: CreateShowcaseDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateShowcaseDto: UpdateShowcaseDto): string;
    remove(id: number): string;
}
