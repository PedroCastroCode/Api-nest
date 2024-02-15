import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { IUserRepository } from './Repositorio/iUser.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: IUserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = User.create(
      createUserDto.email,
      createUserDto.password,
      createUserDto.username,
    );
    return await this.usersRepo.Create(newUser);
  }

  async findAll() {
    return await this.usersRepo.findAll();
  }

  async findOne(id: number) {
    return await this.usersRepo.GetById(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    console.log(id, updateUserDto);
    const newUser = User.create(
      updateUserDto.email,
      updateUserDto.password,
      updateUserDto.username,
      id,
    );
    await this.usersRepo.update(newUser);
    return `User com id ${id} atualizado`;
  }

  async remove(id: number) {
    await this.usersRepo.Remove(id);
    return `User ${id} removed`;
  }
}
