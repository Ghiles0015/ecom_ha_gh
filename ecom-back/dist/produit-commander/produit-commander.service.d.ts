import { CreateProduitCommanderDto } from './dto/create-produit-commander.dto';
import { UpdateProduitCommanderDto } from './dto/update-produit-commander.dto';
export declare class ProduitCommanderService {
    create(createProduitCommanderDto: CreateProduitCommanderDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProduitCommanderDto: UpdateProduitCommanderDto): string;
    remove(id: number): string;
}
