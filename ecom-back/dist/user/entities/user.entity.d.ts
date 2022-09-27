import { ProduitCommander } from "src/produit-commander/entities/produit-commander.entity";
export declare class User {
    id: number;
    email: string;
    password: string;
    produitCommander: ProduitCommander[];
}
