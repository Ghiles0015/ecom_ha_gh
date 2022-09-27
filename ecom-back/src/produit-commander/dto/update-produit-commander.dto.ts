import { PartialType } from '@nestjs/mapped-types';
import { CreateProduitCommanderDto } from './create-produit-commander.dto';

export class UpdateProduitCommanderDto extends PartialType(CreateProduitCommanderDto) {}
