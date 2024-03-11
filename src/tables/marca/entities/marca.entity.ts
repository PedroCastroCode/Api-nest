import { Basic } from 'src/utils/basic';
import { Column, Entity } from 'typeorm';
import MarcaValidatorFactory from '../validators/marca.validator';
import HttpError from 'src/utils/errors/http-errors';

@Entity('marca')
export class Marca extends Basic {
  private constructor(nome: string, id?: number) {
    super();
    this.nome = nome;
    if (id) {
      this.id = id;
    }
  }

  @Column()
  nome: string;

  static create(nome: string, id?: number) {
    this.Validate({ nome, id });
    return new Marca(nome, id);
  }

  static Validate(createMarcaDto): void {
    const validator = MarcaValidatorFactory.Create();
    validator.Validate(createMarcaDto);
    if (validator.errors) {
      new HttpError({ errors: validator.errors }).BadRequest();
    }
  }
}
