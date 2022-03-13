import { Field, InputType, PartialType } from '@nestjs/graphql';

import { CreateGameObjectInput } from '~/graphql/game-object/dto/create-game-object.input';

@InputType()
export class UpdateGameObjectInput extends PartialType(CreateGameObjectInput) {
  @Field()
  id!: string;
}
