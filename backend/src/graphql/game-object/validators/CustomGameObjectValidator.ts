import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

import { GameObjectType } from '~/graphql/game-object/dto/game-object.type';

export function CustomGameObjectValidator(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Record<any, any>, propertyName: string): void {
    registerDecorator({
      name: 'Allowed values for GameObjectType',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const { object } = args;
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          if (GameObjectType.PERSON === relatedValue) {
            if (args.property === 'crew' && 'crew' in object) {
              return false;
            }
          }
          if (GameObjectType.STARSHIP === relatedValue) {
            if (args.property === 'mass' && 'mass' in object) {
              return false;
            }
          }
          return true;
        },
      },
    });
  };
}
