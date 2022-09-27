import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProduitCommanderService } from './produit-commander.service';
import { CreateProduitCommanderDto } from './dto/create-produit-commander.dto';
import { UpdateProduitCommanderDto } from './dto/update-produit-commander.dto';

@Controller('produit-commander')
export class ProduitCommanderController {
  constructor(private readonly produitCommanderService: ProduitCommanderService) {}

  @Post()
  create(@Body() createProduitCommanderDto: CreateProduitCommanderDto) {
    return this.produitCommanderService.create(createProduitCommanderDto);
  }

  @Get()
  findAll() {
    return this.produitCommanderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produitCommanderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProduitCommanderDto: UpdateProduitCommanderDto) {
    return this.produitCommanderService.update(+id, updateProduitCommanderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produitCommanderService.remove(+id);
  }
}
