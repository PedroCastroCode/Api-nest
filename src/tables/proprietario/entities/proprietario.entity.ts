import { Basic } from 'src/utils/basic';
import HttpError from 'src/utils/errors/http-errors';
import { Column, Entity } from 'typeorm';
import ProprietarioValidatorFactory from '../validators/proprietario.validator';

@Entity('proprietario')
export class Proprietario extends Basic {
  private constructor(nome_completo: string, cpf: string, telefone: string, id?: number) {
    super();
    this.nome_completo = nome_completo;
    this.cpf = cpf;
    this.telefone = telefone;
    if (id) {
      this.id = id;
    }
  }

  @Column()
  nome_completo: string;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  static create(nome_completo: string, cpf: string, telefone: string, id?: number) {
    this.Validate({ nome_completo, cpf, telefone, id });
    return new Proprietario(nome_completo, cpf, telefone, id);
  }

  static Validate(CreateProprietarioDto): void {
    const validator = ProprietarioValidatorFactory.Create();
    validator.Validate(CreateProprietarioDto);
    if (validator.errors) {
      new HttpError({ errors: validator.errors }).BadRequest();
    }
  }
}
