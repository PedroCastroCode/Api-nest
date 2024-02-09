import { Basic } from 'src/utils/basic';
import { Column, Entity } from 'typeorm';

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

  static create(createMarcaDto, id?: number) {
    this.Validate(createMarcaDto);
    return new Marca(createMarcaDto.nome, id);
  }

  static Validate(createMarcaDto): void {}
}
