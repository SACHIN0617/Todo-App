import { IsNotEmpty } from 'class-validator';

export class UpdateTodoDto {
  @IsNotEmpty()
  readonly isDone: boolean;
}
