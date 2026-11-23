import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

// DTO para crear task
export class CreateTaskDto {
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  title: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsString()
  userId: string;
}