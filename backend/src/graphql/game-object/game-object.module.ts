import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GameObject } from '~/graphql/game-object/entities/game-object.entity';
import { GameObjectResolver } from '~/graphql/game-object/game-object.resolver';
import { GameObjectService } from '~/graphql/game-object/game-object.service';

@Module({
  imports: [TypeOrmModule.forFeature([GameObject])],
  providers: [GameObjectResolver, GameObjectService],
})
export class GameObjectModule {}
