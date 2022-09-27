import { Produit } from "src/produit/entities/produit.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categorie {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nom:string;

    @Column()
    description:string;

    @OneToMany(()=>Produit,(produit)=>produit.categorie)
    produit:Produit[];

}
