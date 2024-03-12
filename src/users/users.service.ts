import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserRepository } from './Repositorio/iUser.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: IUserRepository) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = User.create(
      createUserDto.username,
      createUserDto.password,
      createUserDto.email,
      createUserDto.cpf,
    );
    return await this.userRepo.Create(newUser);
  }

  async findAll() {
    return await this.userRepo.findAll();
  }

  async findOne(id: number | string) {
    return await this.userRepo.GetById(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = User.create(
      updateUserDto.username,
      updateUserDto.password,
      updateUserDto.email,
      updateUserDto.cpf,
      id,
    );
    await this.userRepo.update(updatedUser);
    return `Marca com id ${id} atualizado`;
  }

  async remove(id: number) {
    await this.userRepo.Remove(id);
  }

  async getUsername(username: string) {
    return await this.userRepo.getByUserName(username);
  }
}
