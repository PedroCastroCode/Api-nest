import { Basic } from 'src/utils/basic';
import { Column, Entity } from 'typeorm';
import HttpError from 'src/utils/errors/http-errors';
import EstoqueValidatorFactory from '../validators/estoque.validator';

@Entity('Estoque')
export class Estoque extends Basic {
  private constructor(
    item: string,
    quantidade: number,
    preco: number,
    id?: number,
  ) {
    super();
    this.item = item;
    this.quantidade = quantidade;
    this.preco = preco;
    if (id) {
      this.id = id;
    }
  }

  @Column()
  item: string;

  @Column()
  quantidade: number;

  @Column()
  preco: number;

  static create(item: string, quantidade: number, preco: number, id?: number) {
    this.Validate({ item, quantidade, preco, id });
    return new Estoque(item, quantidade, preco, id);
  }

  static Validate(createEstoqueDto): void {
    const validator = EstoqueValidatorFactory.Create();
    validator.Validate(createEstoqueDto);
    if (validator.errors) {
      new HttpError({ errors: validator.errors }).BadRequest();
    }
  }
}
