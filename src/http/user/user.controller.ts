import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { IUserInfo } from './types';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) { }

  @Get()
  getUser(): IUserInfo {
    return this.service.getUser();
  }
  @Get()
  getSelectGoods(): IUserInfo {
    return this.service.getUser();
  }
}
