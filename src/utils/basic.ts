import { PrimaryGeneratedColumn } from 'typeorm';

export class Basic {
  @PrimaryGeneratedColumn()
  id: number;
}
