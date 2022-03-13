import { ValidationError as ClassValidatorError } from 'class-validator/types/validation/ValidationError';

export function mapValidation(errors: ClassValidatorError[]): string[] {
  return errors
    .map(({ constraints }) => {
      return Object.values(constraints ?? {}).join(';');
    })
    .flat();
}
