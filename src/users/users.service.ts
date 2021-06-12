import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import * as admin from 'firebase-admin';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const auth = admin.auth();
    await auth.createUser({
      email: createUserDto.email,
      password: createUserDto.password,
      displayName: createUserDto.name
    });
    return;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
