import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
export declare class ProduitService {
    create(createProduitDto: CreateProduitDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProduitDto: UpdateProduitDto): string;
    remove(id: number): string;
}
