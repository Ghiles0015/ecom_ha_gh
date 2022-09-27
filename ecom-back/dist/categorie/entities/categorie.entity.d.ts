import { Produit } from "src/produit/entities/produit.entity";
export declare class Categorie {
    id: number;
    nom: string;
    description: string;
    produit: Produit[];
}
