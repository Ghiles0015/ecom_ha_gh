import { CommuneService } from './commune.service';
import { CreateCommuneDto } from './dto/create-commune.dto';
import { UpdateCommuneDto } from './dto/update-commune.dto';
export declare class CommuneController {
    private readonly communeService;
    constructor(communeService: CommuneService);
    create(createCommuneDto: CreateCommuneDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCommuneDto: UpdateCommuneDto): string;
    remove(id: string): string;
}
