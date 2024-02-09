import { Marca } from 'src/marca/entities/marca.entity';
import { Basic } from 'src/utils/basic';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})
export class Veiculo extends Basic {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Marca)
  @JoinColumn({ name: 'id_marca' })
  marca: Marca;
  @Column()
  id_marca: number;

  @Column()
  placa: string;

  @Column()
  cor: string;
}
