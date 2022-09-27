import { ProduitCommanderService } from './produit-commander.service';
import { CreateProduitCommanderDto } from './dto/create-produit-commander.dto';
import { UpdateProduitCommanderDto } from './dto/update-produit-commander.dto';
export declare class ProduitCommanderController {
    private readonly produitCommanderService;
    constructor(produitCommanderService: ProduitCommanderService);
    create(createProduitCommanderDto: CreateProduitCommanderDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProduitCommanderDto: UpdateProduitCommanderDto): string;
    remove(id: string): string;
}
