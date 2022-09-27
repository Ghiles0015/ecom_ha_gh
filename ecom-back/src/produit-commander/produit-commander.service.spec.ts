import { Test, TestingModule } from '@nestjs/testing';
import { ProduitCommanderService } from './produit-commander.service';

describe('ProduitCommanderService', () => {
  let service: ProduitCommanderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProduitCommanderService],
    }).compile();

    service = module.get<ProduitCommanderService>(ProduitCommanderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
