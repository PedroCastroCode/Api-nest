import { Basic } from 'src/utils/basic';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})
export class User extends Basic {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;
}
