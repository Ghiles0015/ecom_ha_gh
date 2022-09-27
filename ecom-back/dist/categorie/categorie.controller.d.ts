import { CategorieService } from './categorie.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
export declare class CategorieController {
    private readonly categorieService;
    constructor(categorieService: CategorieService);
    create(createCategorieDto: CreateCategorieDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCategorieDto: UpdateCategorieDto): string;
    remove(id: string): string;
}
