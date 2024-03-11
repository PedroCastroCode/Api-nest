import { Proprietario } from './entities/proprietario.entity';
import { ProprietarioInMemoryRepo } from 'src/inMemory/inMemory-proprietario';
import { ProprietarioService } from './proprietario.service';

const propRepo = new ProprietarioInMemoryRepo();
const propService = new ProprietarioService(propRepo);

test('should first create Prop error message', async () => {
  expect(() => Proprietario.create('', '', '', null, null)).toThrow('Http Exception');
  try {
    Proprietario.create('', '', '', null, null);
  } catch (error) {
    // console.log(error);
    expect(error.response).toEqual({
      errors: {
        username: ['username should not be empty', 'username must be a string'],
        password: ['password must be a string', 'password should not be empty'],
        email: ['email should not be empty'],
      },
    });
  }
});
// test('Simple Create Proprietario', async () => {
//   const prop = Proprietario.create('Pedro botelho', '13391964685', '998523415', 1, 1);
//   await propRepo.Create(prop);

//   expect(prop).toBeInstanceOf(Proprietario);
//   expect(prop.nome_completo).toBe('Pedro botelho');
//   expect(prop.cpf).toBe('13391964685');
//   expect(prop.telefone).toBe('998523415');
//   expect(prop.id_user).toBe(1);
//   expect(prop.id).toBe(1);
// });
