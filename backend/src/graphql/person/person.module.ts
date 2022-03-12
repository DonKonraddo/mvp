import { Module } from '@nestjs/common';

import { PersonResolver } from '~/graphql/person/person.resolver';
import { PersonService } from '~/graphql/person/person.service';

@Module({
  providers: [PersonResolver, PersonService],
})
export class PersonModule {}
