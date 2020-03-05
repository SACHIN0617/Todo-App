import { Injectable, HttpException, HttpStatus, BadRequestException, forwardRef, Inject } from '@nestjs/common';
import { User } from './user.model';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor() {}

  async createUser(userDto: UserDto): Promise<User> {
      return await User.create(userDto);
  }
}
