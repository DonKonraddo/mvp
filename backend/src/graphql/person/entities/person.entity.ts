import { InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Person {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({ type: 'int' })
  mass!: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}

@InputType()
export class PersonInput extends Person {}
