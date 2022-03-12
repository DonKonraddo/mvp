import { Module } from '@nestjs/common';

import { OrganizationResolver } from '~/graphql/organization/organization.resolver';
import { OrganizationService } from '~/graphql/organization/organization.service';

@Module({
  providers: [OrganizationResolver, OrganizationService],
})
export class OrganizationModule {}
