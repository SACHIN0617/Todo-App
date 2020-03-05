import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;
}
