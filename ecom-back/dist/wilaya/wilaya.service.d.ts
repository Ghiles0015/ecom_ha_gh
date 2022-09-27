import { CreateWilayaDto } from './dto/create-wilaya.dto';
import { UpdateWilayaDto } from './dto/update-wilaya.dto';
export declare class WilayaService {
    create(createWilayaDto: CreateWilayaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWilayaDto: UpdateWilayaDto): string;
    remove(id: number): string;
}
