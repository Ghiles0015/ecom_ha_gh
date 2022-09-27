import { WilayaService } from './wilaya.service';
import { CreateWilayaDto } from './dto/create-wilaya.dto';
import { UpdateWilayaDto } from './dto/update-wilaya.dto';
export declare class WilayaController {
    private readonly wilayaService;
    constructor(wilayaService: WilayaService);
    create(createWilayaDto: CreateWilayaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWilayaDto: UpdateWilayaDto): string;
    remove(id: string): string;
}
