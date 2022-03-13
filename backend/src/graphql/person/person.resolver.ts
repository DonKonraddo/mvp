import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreatePersonInput } from '~/graphql/person/dto/create-person.input';
import { UpdatePersonInput } from '~/graphql/person/dto/update-person.input';
import { Person } from '~/graphql/person/entities/person.entity';
import { PersonService } from '~/graphql/person/person.service';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Mutation(() => Person)
  createPerson(
    @Args('createPersonInput') createPersonInput: CreatePersonInput,
  ): Promise<Person> {
    return this.personService.create(createPersonInput);
  }

  @Query(() => Person)
  findRandomlyOnePerson(
    @Args('id', { nullable: true, type: () => [String] }) omitIds: string[],
  ): Promise<Person> {
    return this.personService.findRandomlyOne(omitIds);
  }

  @Query(() => Person, { name: 'person' })
  findOne(@Args('id') id: string): Promise<Person> {
    return this.personService.findOne(id);
  }

  @Mutation(() => Person)
  updatePerson(
    @Args('updatePersonInput') updatePersonInput: UpdatePersonInput,
  ): Promise<Person> {
    return this.personService.update(updatePersonInput.id, updatePersonInput);
  }

  @Mutation(() => Boolean)
  deletePerson(@Args('id') id: string): Promise<boolean> {
    return this.personService.delete(id);
  }
}
