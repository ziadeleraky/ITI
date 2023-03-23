import { IsNotEmpty, IsString } from 'class-validator';

export class LoginAuth {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
