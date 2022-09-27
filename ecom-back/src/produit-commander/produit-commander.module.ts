import { Module } from '@nestjs/common';
import { ProduitCommanderService } from './produit-commander.service';
import { ProduitCommanderController } from './produit-commander.controller';

@Module({
  controllers: [ProduitCommanderController],
  providers: [ProduitCommanderService]
})
export class ProduitCommanderModule {}
