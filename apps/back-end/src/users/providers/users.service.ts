import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export abstract class UsersService {
  abstract create(createUserDto: CreateUserDto): Promise<User>;

  abstract findAll(): Promise<User[]>;

  abstract findOne(id: string): Promise<User>;

  abstract update(id: string, updateUserDto: UpdateUserDto);

  abstract remove(id: string);

  abstract findByEmail(email: string): Promise<User>;
}
