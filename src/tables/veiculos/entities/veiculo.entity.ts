import { Marca } from 'src/tables/marca/entities/marca.entity';
import { Basic } from 'src/utils/basic';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import VeiculoValidatorFactory from '../Validators/veiculo.validator';
import HttpError from 'src/utils/errors/http-errors';

@Entity('veiculo')
export class Veiculo extends Basic {
  private constructor(
    id_marca: number,
    placa: string,
    cor: string,
    preco: number,
    anoFabricacao: Date,
    km: number,
    id?: number,
  ) {
    super();
    this.id_marca = id_marca;
    this.placa = placa;
    this.cor = cor;
    this.preco = preco;
    this.anoFabricacao = anoFabricacao;
    this.km = km;
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

  @Column()
  preco: number;

  @Column()
  anoFabricacao: Date;

  @Column()
  km: number;

  static create(
    id_marca: number,
    placa: string,
    cor: string,
    preco: number,
    anoFabricacao: Date,
    km: number,
    id?: number,
  ) {
    this.Validate({ id_marca, placa, cor, preco, anoFabricacao, km, id });
    return new Veiculo(id_marca, placa, cor, preco, anoFabricacao, km, id);
  }

  static Validate(CreateVeiculoDto): void {
    const validator = VeiculoValidatorFactory.Create();
    validator.Validate(CreateVeiculoDto);
    if (validator.errors) {
      new HttpError({ errors: validator.errors }).BadRequest();
    }
  }
}
