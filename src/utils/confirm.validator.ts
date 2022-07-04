import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraintInterface,
} from 'class-validator';

export class ConfirmValidator implements ValidatorConstraintInterface {
  getFieldToMatch(args: ValidationArguments) {
    const thisProp = args.property;
    const name = args.constraints[0] || `${thisProp}Confirm`;
    const check = args.object[name];
    return { name, check };
  }

  validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    const { check } = this.getFieldToMatch(validationArguments);

    return value === check;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    const { name } = this.getFieldToMatch(validationArguments);
    return `${validationArguments.property} and ${name} doesn't match`;
  }
}

export function Confirm(
  property?: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: ConfirmValidator,
    });
  };
}
