import { IsBoolean, IsOptional, IsString } from 'class-validator';

// DTO para crear task
export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsString()
  userId: string;
}