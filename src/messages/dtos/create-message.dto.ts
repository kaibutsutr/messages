import { IsString } from 'class-validator'; // isString is a prebuilt validator that checks for strings
export class CreateMessageDto {
  @IsString()
  content: string; // check the next line if its string or not
}
