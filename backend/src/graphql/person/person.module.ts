import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Person } from '~/graphql/person/entities/person.entity';
import { PersonResolver } from '~/graphql/person/person.resolver';
import { PersonService } from '~/graphql/person/person.service';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  providers: [PersonResolver, PersonService],
})
export class PersonModule {}
