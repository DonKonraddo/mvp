import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateGameObjectInput } from '~/graphql/game-object/dto/create-game-object.input';
import { GameObjectType } from '~/graphql/game-object/dto/game-object.type';
import { UpdateGameObjectInput } from '~/graphql/game-object/dto/update-game-object.input';
import { GameObject } from '~/graphql/game-object/entities/game-object.entity';
import { GameObjectService } from '~/graphql/game-object/game-object.service';

@Resolver(() => GameObject)
export class GameObjectResolver {
  constructor(private readonly gameObjectService: GameObjectService) {}

  @Mutation(() => GameObject)
  createGameObject(
    @Args('createGameObjectInput') createGameObjectInput: CreateGameObjectInput,
  ): Promise<GameObject> {
    return this.gameObjectService.create(createGameObjectInput);
  }

  @Query(() => GameObject, { nullable: true })
  findRandomlyOnePerson(
    @Args('gameObjectType', { type: () => GameObjectType })
    gameObjectType: GameObjectType,
    @Args('id', { nullable: true, type: () => [String] }) omitIds: string[],
  ): Promise<GameObject | undefined> {
    return this.gameObjectService.findRandomlyOne(gameObjectType, omitIds);
  }

  @Query(() => GameObject, { name: 'gameObject' })
  findOne(@Args('id') id: string): Promise<GameObject> {
    return this.gameObjectService.findOne(id);
  }

  @Mutation(() => GameObject)
  updateGameObject(
    @Args('updateGameObjectInput') updateGameObjectInput: UpdateGameObjectInput,
  ): Promise<GameObject> {
    return this.gameObjectService.update(
      updateGameObjectInput.id,
      updateGameObjectInput,
    );
  }

  @Mutation(() => GameObject)
  deleteGameObject(@Args('id') id: string): Promise<boolean> {
    return this.gameObjectService.delete(id);
  }
}
