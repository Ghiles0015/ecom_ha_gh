import { ProduitCommander } from "src/produit-commander/entities/produit-commander.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class User {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({
      unique: true,
      length: 30,
    })
    email: string;
  
    @Column({
      nullable: false,
      select: false,
      length: 255,
    })
    password: string;

    
  @OneToMany(() => ProduitCommander, (produitCommaner) => produitCommaner.user)
  produitCommander: ProduitCommander[];

}
