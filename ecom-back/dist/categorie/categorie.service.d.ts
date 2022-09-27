import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
export declare class CategorieService {
    create(createCategorieDto: CreateCategorieDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCategorieDto: UpdateCategorieDto): string;
    remove(id: number): string;
}
