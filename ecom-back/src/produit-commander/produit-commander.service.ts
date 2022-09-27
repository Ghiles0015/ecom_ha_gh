import { Injectable } from '@nestjs/common';
import { CreateProduitCommanderDto } from './dto/create-produit-commander.dto';
import { UpdateProduitCommanderDto } from './dto/update-produit-commander.dto';

@Injectable()
export class ProduitCommanderService {
  create(createProduitCommanderDto: CreateProduitCommanderDto) {
    return 'This action adds a new produitCommander';
  }

  findAll() {
    return `This action returns all produitCommander`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produitCommander`;
  }

  update(id: number, updateProduitCommanderDto: UpdateProduitCommanderDto) {
    return `This action updates a #${id} produitCommander`;
  }

  remove(id: number) {
    return `This action removes a #${id} produitCommander`;
  }
}
