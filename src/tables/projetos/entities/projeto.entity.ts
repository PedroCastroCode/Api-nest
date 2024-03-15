import { Basic } from 'src/utils/basic';
import HttpError from 'src/utils/errors/http-errors';
import { Column, Entity } from 'typeorm';
import ProjetoValidatorFactory from '../Validators/projeto.validator';

@Entity('Projeto')
export class Projeto extends Basic {
  private constructor(
    nome_projeto: string,
    descricao: string,
    responsaveis: string,
    dtInicio: Date,
    id?: number,
  ) {
    super();
    this.nome_projeto = nome_projeto;
    this.descricao = descricao;
    this.responsaveis = responsaveis;
    this.dtInicio = dtInicio;
    if (id) {
      this.id = id;
    }
  }

  @Column()
  nome_projeto: string;

  @Column()
  descricao: string;

  @Column()
  responsaveis: string;

  @Column()
  dtInicio: Date;

  static create(
    nome_projeto: string,
    descricao: string,
    responsaveis: string,
    dtInicio: Date,
    id?: number,
  ) {
    this.Validate({ nome_projeto, descricao, responsaveis, dtInicio, id });
    return new Projeto(nome_projeto, descricao, responsaveis, dtInicio, id);
  }

  static Validate(CreateProjetoDto): void {
    const validator = ProjetoValidatorFactory.Create();
    validator.Validate(CreateProjetoDto);
    if (validator.errors) {
      new HttpError({ errors: validator.errors }).BadRequest();
    }
  }
}
