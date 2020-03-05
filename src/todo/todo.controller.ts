import { Controller, Get, Post, Put, UseInterceptors, ClassSerializerInterceptor, Param, ParseIntPipe, Body, Req, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';
import { UpdateTodoDto } from './dto/update.todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() todoDto: TodoDto): Promise<any> {
    return this.todoService.createTask(todoDto);
  }

  @Get()
  async index(@Query() params: any): Promise<any> {
    return this.todoService.fetchTasks(params);
  }

  @Get('/:id')
  async show(@Param('id', new ParseIntPipe()) id: number): Promise<any> {
    return this.todoService.fetchTask(id);
  }

  @Put('/:id')
  async updateTask(@Body() updateTodoDto: UpdateTodoDto, @Param('id', new ParseIntPipe()) id: number): Promise<any> {
    return this.todoService.updateTask(id, updateTodoDto);
  }
}