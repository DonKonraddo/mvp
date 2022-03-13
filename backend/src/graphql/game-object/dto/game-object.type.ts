import { registerEnumType } from '@nestjs/graphql';

export enum GameObjectType {
  PERSON = '0',
  STARSHIP = '1',
}

registerEnumType(GameObjectType, {
  name: 'GameObjectType',
});
