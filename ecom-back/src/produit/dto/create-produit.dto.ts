import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';


export class CreateProduitDto {
    @IsString()
    codeProduit:string;

    @IsString()
    nom:string;

    @IsString()
    slug:string;

    @IsString()
    desccription:string;

    @IsNumber()
    prix:number;

    @IsNumber()
    categorie:number;

    

}


