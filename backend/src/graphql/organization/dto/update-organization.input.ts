import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

import { CreateOrganizationInput } from './create-organization.input';

@InputType()
export class UpdateOrganizationInput extends PartialType(
  CreateOrganizationInput,
) {
  @Field(() => Int)
  id!: number;
}
