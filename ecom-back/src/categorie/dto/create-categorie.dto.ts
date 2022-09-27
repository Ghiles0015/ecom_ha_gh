import { IsString } from "class-validator";
import { Produit } from "src/produit/entities/produit.entity";
import { OneToMany } from "typeorm";

export class CreateCategorieDto {

    @IsString()
    nom:string;

    @IsString()
    description:string;

    @OneToMany(()=>Produit,(produit)=>produit.categorie)
    produit:Produit[];
}
