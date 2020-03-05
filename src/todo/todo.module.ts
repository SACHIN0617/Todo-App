import { Module, forwardRef } from '@nestjs/common';
// import { UserService } from './user.service';
import { TodoController } from './todo.controller';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '../config/config.module';
import { TodoService } from './todo.service';

@Module({
  imports: [DatabaseModule, ConfigModule],
  controllers: [TodoController],
  providers: [TodoService],
  exports: [TodoService]
})
export class TodoModule {}
