import { Injectable } from '@nestjs/common';

import { CreatePersonInput } from '~/graphql/person/dto/create-person.input';
import { UpdatePersonInput } from '~/graphql/person/dto/update-person.input';

@Injectable()
export class PersonService {
  create(createPersonInput: CreatePersonInput) {
    return 'This action adds a new person';
  }

  findAll() {
    return `This action returns all person`;
  }

  findOne(id: string) {
    return `This action returns a #${id} person`;
  }

  update(id: string, updatePersonInput: UpdatePersonInput) {
    return `This action updates a #${id} person`;
  }

  remove(id: string) {
    return `This action removes a #${id} person`;
  }
}
