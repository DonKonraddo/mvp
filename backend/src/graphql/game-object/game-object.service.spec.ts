import { Test, TestingModule } from '@nestjs/testing';
import { GameObjectService } from './game-object.service';

describe('GameObjectService', () => {
  let service: GameObjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameObjectService],
    }).compile();

    service = module.get<GameObjectService>(GameObjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
