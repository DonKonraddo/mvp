import { ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
}
