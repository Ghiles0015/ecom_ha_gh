import { Wilaya } from "src/wilaya/entities/wilaya.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Commune {
    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    code:number

    @Column()
    nomLatin:string

    @Column()
    nomArabe:string

    @ManyToOne(()=>Wilaya,(wilaya)=>wilaya.commune)
    wilaya:Wilaya;



}
