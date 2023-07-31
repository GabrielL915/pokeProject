import { UsersService } from './users.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UsersServiceImpl extends UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: Repository<User>,
  ) {
    super();
  }
  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.hashPassword(createUserDto.password);
    const createUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(createUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email: email } });
  }

  private async hashPassword(password: string) {
    const saltRounds = 10;
    const myPlaintextPassword = password;
    const salt = await hash(myPlaintextPassword, saltRounds);
    return salt;
  }
}
