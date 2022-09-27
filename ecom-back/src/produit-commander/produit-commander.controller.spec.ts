import { Test, TestingModule } from '@nestjs/testing';
import { ProduitCommanderController } from './produit-commander.controller';
import { ProduitCommanderService } from './produit-commander.service';

describe('ProduitCommanderController', () => {
  let controller: ProduitCommanderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProduitCommanderController],
      providers: [ProduitCommanderService],
    }).compile();

    controller = module.get<ProduitCommanderController>(ProduitCommanderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
