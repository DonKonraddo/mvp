import { Field, InputType, PartialType } from '@nestjs/graphql';

import { CreatePersonInput } from '~/graphql/person/dto/create-person.input';

@InputType()
export class UpdatePersonInput extends PartialType(CreatePersonInput) {
  @Field()
  id!: string;
}
