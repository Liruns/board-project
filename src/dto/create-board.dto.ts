import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBoardDto {

  @IsString()
  owner: string;

  @IsString()
  title: number;

  @IsString()
  description : string;
}