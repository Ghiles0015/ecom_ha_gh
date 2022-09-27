import { Commune } from "src/commune/entities/commune.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wilaya {
    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    code:number

    @Column()
    nomLatin:string

    @Column()
    nomArabe:string

    @OneToMany(()=>Commune,(commune)=>commune.wilaya)
    commune:Commune[];
}
