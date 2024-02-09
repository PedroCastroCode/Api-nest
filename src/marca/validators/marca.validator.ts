import { IsNotEmpty, IsString } from 'class-validator';
import { Basic } from 'src/utils/basic';

export class MarcaRules extends Basic {
  @IsString()
  @IsNotEmpty({ message: 'Name from Nome is required' })
  nome: string;
}
