import { InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { GameObjectType } from '~/graphql/game-object/dto/game-object.type';

@ObjectType()
@Entity()
export class GameObject {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  gameObjectType!: GameObjectType;

  @Column()
  name!: string;

  @Column({ type: 'int', nullable: true, default: null })
  mass?: number | null;

  @Column({ type: 'int', nullable: true, default: null })
  crew?: number | null;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}

@InputType()
export class GameObjectInput extends GameObject {}
