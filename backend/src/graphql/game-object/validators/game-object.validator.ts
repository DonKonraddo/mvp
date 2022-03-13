import { IsEnum, IsNumber, IsOptional, Length } from 'class-validator';
import { assign } from 'lodash';

import { GameObjectType } from '~/graphql/game-object/dto/game-object.type';
import { GameObject } from '~/graphql/game-object/entities/game-object.entity';
import { CustomGameObjectValidator } from '~/graphql/game-object/validators/CustomGameObjectValidator';

export class GameObjectValidator {
  constructor(props: Partial<GameObject>) {
    assign(this, props);
  }

  @IsEnum(GameObjectType)
  gameObjectType!: GameObjectType;

  @Length(3, 20)
  name!: string;

  @IsOptional()
  @IsNumber()
  @CustomGameObjectValidator('gameObjectType', {
    message: 'mass property allowed only for GameObjectType PERSON',
  })
  mass?: number;

  @IsOptional()
  @IsNumber()
  @CustomGameObjectValidator('gameObjectType', {
    message: 'crew property allowed only for GameObjectType STARSHIP',
  })
  crew?: number;
}
