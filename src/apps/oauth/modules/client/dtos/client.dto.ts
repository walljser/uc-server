import {
  GrantTypes,
  ResponseTypes,
  TokenAuthMethod,
  ResponseModes,
} from './../../../constants/index';
import {
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ClientDto {
  @IsString()
  @MinLength(4)
  @MaxLength(24)
  name: string;

  @IsArray()
  @IsNotEmpty()
  redirect: string[];

  GrantTypes: GrantTypes[];

  responseTypes: ResponseTypes[];

  responseModes: ResponseModes[];

  scopes: string;

  authMethods: TokenAuthMethod[];
}
