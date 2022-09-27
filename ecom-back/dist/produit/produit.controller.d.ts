import { ProduitService } from './produit.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
export declare class ProduitController {
    private readonly produitService;
    constructor(produitService: ProduitService);
    create(createProduitDto: CreateProduitDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProduitDto: UpdateProduitDto): string;
    remove(id: string): string;
}
