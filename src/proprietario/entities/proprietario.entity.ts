import { User } from 'src/users/entities/user.entity';
import { Basic } from 'src/utils/basic';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})
export class Proprietario extends Basic {
  @Column()
  nome_completo: string;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'id_user' })
  user: User;
  @Column()
  id_user: number;
}
