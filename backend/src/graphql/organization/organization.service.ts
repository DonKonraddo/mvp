import { Injectable } from '@nestjs/common';

import { CreateOrganizationInput } from '~/graphql/organization/dto/create-organization.input';
import { UpdateOrganizationInput } from '~/graphql/organization/dto/update-organization.input';

@Injectable()
export class OrganizationService {
  create(createOrganizationInput: CreateOrganizationInput) {
    return 'This action adds a new organization';
  }

  findAll() {
    return `This action returns all organization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organization`;
  }

  update(id: number, updateOrganizationInput: UpdateOrganizationInput) {
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
