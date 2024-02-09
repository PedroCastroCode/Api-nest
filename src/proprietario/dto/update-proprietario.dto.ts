import { PartialType } from '@nestjs/swagger';
import { CreateProprietarioDto } from './create-proprietario.dto';

export class UpdateProprietarioDto extends PartialType(CreateProprietarioDto) {}
