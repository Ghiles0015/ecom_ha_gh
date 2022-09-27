import { Categorie } from "src/categorie/entities/categorie.entity";
import { ProduitCommander } from "src/produit-commander/entities/produit-commander.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true,
        unique: true,
      })
    codeProduit:string;
    
    @Column({
        nullable: true,
      })
    nom:string;


    @Column({
        nullable: true,
      })
    slug:string;

    @Column({
        nullable: true,
      })
    desccription:string;
   
    @Column({
        nullable: true,
      })
    prix:number;

    @Column({
      nullable: true,
    })
    image1:number;

    @Column({
      nullable: true,
    })
    image2:number;

    @Column({
      nullable: true,
    })
    image3:number;

    @Column({
      nullable: true,
    })
    image4:number;

    @OneToMany(() => ProduitCommander, (produitCommander) => produitCommander.produit)
    produitCommander: ProduitCommander[];

    @ManyToOne(()=>Categorie,(categorie)=>categorie.produit)
    categorie:Categorie;
}
