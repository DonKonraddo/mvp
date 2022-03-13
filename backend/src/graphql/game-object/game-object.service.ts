import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateGameObjectInput } from '~/graphql/game-object/dto/create-game-object.input';
import { GameObjectType } from '~/graphql/game-object/dto/game-object.type';
import { UpdateGameObjectInput } from '~/graphql/game-object/dto/update-game-object.input';
import { GameObject } from '~/graphql/game-object/entities/game-object.entity';

@Injectable()
export class GameObjectService {
  constructor(
    @InjectRepository(GameObject)
    private gameObjectRepository: Repository<GameObject>,
  ) {}

  create(createGameObjectInput: CreateGameObjectInput): Promise<GameObject> {
    return this.gameObjectRepository.save(createGameObjectInput);
  }

  findOne(id: string): Promise<GameObject> {
    return this.gameObjectRepository.findOneOrFail({ id });
  }

  private fillEmptyArray<T>(array?: T[]): T[] | number[] {
    if (!array || array?.length === 0) {
      return [-1];
    }
    return array;
  }

  findRandomlyOne(
    gameObjectType: GameObjectType,
    omitIds?: string[],
  ): Promise<GameObject | undefined> {
    return this.gameObjectRepository
      .createQueryBuilder('gameObject')
      .where('gameObject.gameObjectType = :gameObjectType', {
        gameObjectType,
      })
      .andWhere('gameObject.id NOT IN (:omitIds)', {
        omitIds: this.fillEmptyArray(omitIds),
      })
      .orderBy('RAND()')
      .limit(1)
      .getOne();
  }

  async update(
    id: string,
    updateGameObjectInput: UpdateGameObjectInput,
  ): Promise<GameObject> {
    await this.gameObjectRepository.update(
      id,
      this.gameObjectRepository.create(updateGameObjectInput),
    );
    return this.findOne(id);
  }

  async delete(id: string): Promise<boolean> {
    const { affected } = await this.gameObjectRepository.delete({ id });
    return !!affected;
  }
}
