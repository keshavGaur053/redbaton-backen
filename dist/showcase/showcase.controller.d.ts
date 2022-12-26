import { ShowcaseService } from './showcase.service';
import { CreateShowcaseDto } from './dto/create-showcase.dto';
import { UpdateShowcaseDto } from './dto/update-showcase.dto';
export declare class ShowcaseController {
    private readonly showcaseService;
    constructor(showcaseService: ShowcaseService);
    create(createShowcaseDto: CreateShowcaseDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateShowcaseDto: UpdateShowcaseDto): string;
    remove(id: string): string;
}
