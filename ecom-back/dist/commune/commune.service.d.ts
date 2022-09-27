import { CreateCommuneDto } from './dto/create-commune.dto';
import { UpdateCommuneDto } from './dto/update-commune.dto';
export declare class CommuneService {
    create(createCommuneDto: CreateCommuneDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCommuneDto: UpdateCommuneDto): string;
    remove(id: number): string;
}
