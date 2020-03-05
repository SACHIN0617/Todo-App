import { IsNotEmpty, Allow } from 'class-validator';
import { Optional } from '@nestjs/common';

export class TodoDto {
  @IsNotEmpty()
  readonly title: string;

  @Optional()
  readonly description: string;

  @IsNotEmpty()
  readonly assignedTo: string;

  @Optional()
  readonly isDone: boolean;

  @Optional()
  readonly isDeleted: boolean;
}
