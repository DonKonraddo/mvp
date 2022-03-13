import { InputType, OmitType } from '@nestjs/graphql';

import { GameObjectInput } from '~/graphql/game-object/entities/game-object.entity';

@InputType()
export class CreateGameObjectInput extends OmitType(GameObjectInput, [
  'id',
  'createdAt',
] as const) {}
