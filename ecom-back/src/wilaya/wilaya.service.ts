import { Injectable } from '@nestjs/common';
import { CreateWilayaDto } from './dto/create-wilaya.dto';
import { UpdateWilayaDto } from './dto/update-wilaya.dto';

@Injectable()
export class WilayaService {
  create(createWilayaDto: CreateWilayaDto) {
    return 'This action adds a new wilaya';
  }

  findAll() {
    return `This action returns all wilaya`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wilaya`;
  }

  update(id: number, updateWilayaDto: UpdateWilayaDto) {
    return `This action updates a #${id} wilaya`;
  }

  remove(id: number) {
    return `This action removes a #${id} wilaya`;
  }
}
