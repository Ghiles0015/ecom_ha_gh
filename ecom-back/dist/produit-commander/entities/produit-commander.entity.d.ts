import { Produit } from "src/produit/entities/produit.entity";
import { User } from "src/user/entities/user.entity";
export declare class ProduitCommander {
    userId: number;
    user: User;
    produitId: number;
    produit: Produit;
    quantite: number;
}
