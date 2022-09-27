import { Categorie } from "src/categorie/entities/categorie.entity";
import { ProduitCommander } from "src/produit-commander/entities/produit-commander.entity";
export declare class Produit {
    id: number;
    codeProduit: string;
    nom: string;
    slug: string;
    desccription: string;
    prix: number;
    image1: number;
    image2: number;
    image3: number;
    image4: number;
    produitCommander: ProduitCommander[];
    categorie: Categorie;
}
