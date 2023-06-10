import { Injectable } from '@nestjs/common';
import { IUserInfo } from './types';

@Injectable()
export class UserService {
  getUser(): IUserInfo {
    return {
      name: 'huangsq',
      shop_type: 12,
    };
  }

  getSelectGoods;
}
