import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

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
  ) {
    return this.personService.create(createPersonInput);
  }

  @Query(() => [Person], { name: 'person' })
  findAll() {
    return this.personService.findAll();
  }

  @Query(() => Person, { name: 'person' })
  findOne(@Args('id') id: string) {
    return this.personService.findOne(id);
  }

  @Mutation(() => Person)
  updatePerson(
    @Args('updatePersonInput') updatePersonInput: UpdatePersonInput,
  ) {
    return this.personService.update(updatePersonInput.id, updatePersonInput);
  }

  @Mutation(() => Person)
  removePerson(@Args('id') id: string) {
    return this.personService.remove(id);
  }
}
