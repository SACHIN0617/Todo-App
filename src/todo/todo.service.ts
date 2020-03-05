import { Injectable, HttpException, HttpStatus, BadRequestException, forwardRef, Inject } from '@nestjs/common';
import { Todo } from './todo.model';
// import { User } from './user.model';

@Injectable()
export class TodoService {
  constructor() {}

  async createTask(todoDto): Promise<any> {
      return await Todo.create(todoDto);
  }

  async fetchTasks(params: any): Promise<any> {
    // const { assignedTo, page, count } = params;
    const limit = params.count ? params.count : null;
    const offset = params.page && params.count ? (params.page - 1) * params.count : null;
    delete params.page;
    delete params.count;
    return await Todo.findAll({ where: params, limit, offset, attributes: ['id', 'title', 'isDone', "createdAt"] });
    
  }

  async fetchTask(id: number): Promise<any> {
    return await Todo.findByPk(id);
  }

  async updateTask(id: number, updateTodoDto): Promise<any> {
    const todo = await Todo.findByPk(id);
    todo.isDone = updateTodoDto.isDone
    return await todo.save();
  }
}
