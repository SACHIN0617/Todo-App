import { Controller, Get, Post, UseInterceptors, ClassSerializerInterceptor, Param, ParseIntPipe, Body, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userDto: UserDto): Promise<any> {
    return this.userService.createUser(userDto);
  }

}
