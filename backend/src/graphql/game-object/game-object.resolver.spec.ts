import { Test, TestingModule } from '@nestjs/testing';
import { GameObjectResolver } from './game-object.resolver';
import { GameObjectService } from './game-object.service';

describe('GameObjectResolver', () => {
  let resolver: GameObjectResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameObjectResolver, GameObjectService],
    }).compile();

    resolver = module.get<GameObjectResolver>(GameObjectResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
