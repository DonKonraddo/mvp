import { InputType, OmitType } from '@nestjs/graphql';

import { PersonInput } from '~/graphql/person/entities/person.entity';

@InputType()
export class CreatePersonInput extends OmitType(PersonInput, [
  'id',
  'createdAt',
] as const) {}
