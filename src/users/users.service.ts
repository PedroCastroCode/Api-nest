import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { error } from 'console';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepo.save(createUserDto);
  }

  findAll() {
    return this.usersRepo.find();
  }

  findOne(id: typeof User.prototype.id) {
    return this.usersRepo.findOneBy({ id: id });
  }

  async update(id: typeof User.prototype.id, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepo.findOneBy({ id: id });

    if (!user) throw new Error(`User Not Found By This ID: ${id}`);

    updateUserDto.id = id;
    const newUser = await this.usersRepo.preload(updateUserDto);
    await this.usersRepo.save(newUser);
    return newUser;
  }

  async remove(id: number) {
    const user = await this.usersRepo.findOneBy({ id: id });

    if (!user) {
      throw new Error(`User Not Found By This ID: ${id}`);
    }
    await this.usersRepo.delete(user);

    return `User ${id} removed`;
  }
}
