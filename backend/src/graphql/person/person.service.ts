import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePersonInput } from '~/graphql/person/dto/create-person.input';
import { UpdatePersonInput } from '~/graphql/person/dto/update-person.input';
import { Person } from '~/graphql/person/entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  create(createPersonInput: CreatePersonInput): Promise<Person> {
    return this.personRepository.save(createPersonInput);
  }

  findOne(id: string): Promise<Person> {
    return this.personRepository.findOneOrFail({ id });
  }

  findRandomlyOne(omitIds?: string[]): Promise<Person> {
    return this.personRepository
      .createQueryBuilder('person')
      .where('person.id NOT IN (:omitIds)', { omitIds })
      .orderBy('RAND()')
      .limit(1)
      .getOneOrFail();
  }

  async update(
    id: string,
    updatePersonInput: UpdatePersonInput,
  ): Promise<Person> {
    await this.personRepository.update(
      id,
      this.personRepository.create(updatePersonInput),
    );
    return this.findOne(id);
  }

  async delete(id: string): Promise<boolean> {
    const { affected } = await this.personRepository.delete({ id });
    return !!affected;
  }
}
