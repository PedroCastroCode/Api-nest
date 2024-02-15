import { Marca } from 'src/tables/marca/entities/marca.entity';
import { Basic } from 'src/utils/basic';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import VeiculoValidatorFactory from '../Validators/veiculo.validator';
import HttpError from 'src/utils/errors/http-errors';

@Entity('veiculo')
export class Veiculo extends Basic {
  private constructor(id_marca: number, placa: string, cor: string, id?: number) {
    super();
    this.id_marca = id_marca;
    this.placa = placa;
    this.cor = cor;
    if (id) {
      this.id = id;
    }
  }

  @ManyToOne((type) => Marca)
  @JoinColumn({ name: 'id_marca' })
  marca: Marca;
  @Column()
  id_marca: number;

  @Column()
  placa: string;

  @Column()
  cor: string;

  static create(id_marca: number, placa: string, cor: string, id?: number) {
    this.Validate({ id_marca, placa, cor });
    return new Veiculo(id_marca, placa, cor);
  }

  static Validate(CreateVeiculoDto): void {
    const validator = VeiculoValidatorFactory.Create();
    validator.Validate(CreateVeiculoDto);
    if (validator.errors) {
      new HttpError({ errors: validator.errors }).BadRequest();
    }
  }
}
