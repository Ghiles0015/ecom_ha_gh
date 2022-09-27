import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WilayaService } from './wilaya.service';
import { CreateWilayaDto } from './dto/create-wilaya.dto';
import { UpdateWilayaDto } from './dto/update-wilaya.dto';

@Controller('wilaya')
export class WilayaController {
  constructor(private readonly wilayaService: WilayaService) {}

  @Post()
  create(@Body() createWilayaDto: CreateWilayaDto) {
    return this.wilayaService.create(createWilayaDto);
  }

  @Get()
  findAll() {
    return this.wilayaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wilayaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWilayaDto: UpdateWilayaDto) {
    return this.wilayaService.update(+id, updateWilayaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wilayaService.remove(+id);
  }
}
