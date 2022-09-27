import { Produit } from "src/produit/entities/produit.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class ProduitCommander {

    @PrimaryColumn()
    userId: number;
    @ManyToOne(() => User, (user) => user.produitCommander)
    user: User;
  
    
    @PrimaryColumn()
    produitId: number;
    @ManyToOne(() => Produit, (produit) => produit.produitCommander)
    produit: Produit;

    @Column()
    quantite:number;
}
