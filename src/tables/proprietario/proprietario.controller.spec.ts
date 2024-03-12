import { Proprietario } from './entities/proprietario.entity';
import { ProprietarioInMemoryRepo } from 'src/inMemory/inMemory-proprietario';
import { ProprietarioService } from './proprietario.service';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';

const propRepo = new ProprietarioInMemoryRepo();
const propService = new ProprietarioService(propRepo);

test('should first create Prop error message', async () => {
  expect(() => Proprietario.create('', '', '', null)).toThrow('Http Exception');
  try {
    Proprietario.create('', '', '', null);
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
test('Simple Create Proprietario', async () => {
  propService.create({
    nome_completo: 'Pedro botelho',
    cpf: '13391964685',
    telefone: '998523415',
  } as CreateProprietarioDto);
  const propFind = await propRepo.GetById(1);

  expect(propFind.nome_completo).toBe('Pedro botelho');
  expect(propFind.cpf).toBe('13391964685');
  expect(propFind.telefone).toBe('998523415');
});
test('find one', async () => {
  const prop = Proprietario.create('Pedro', '13391964685', '998523415', 3);
  propRepo.Create(prop);
  const proprietarioFound = await propRepo.GetById(prop.id);

  expect(proprietarioFound).toBeInstanceOf(Proprietario);
  expect(proprietarioFound.nome_completo).toBe('Pedro');
  expect(proprietarioFound.cpf).toBe('13391964685');
  expect(proprietarioFound.telefone).toBe('998523415');
  expect(proprietarioFound.id).toBe(1);
});

test('Simple Create Proprietario', async () => {
  propService.create({
    nome_completo: 'Pedro botelho',
    cpf: '13391964685',
    telefone: '998523415',
  } as CreateProprietarioDto);
  const propFind = await propRepo.GetById(1);

  expect(propFind.nome_completo).toBe('Pedro botelho');
  expect(propFind.cpf).toBe('13391964685');
  expect(propFind.telefone).toBe('998523415');
});

test('find All', async () => {
  const propsData = [
    { nome_completo: 'Pedro botelho', cpf: '13391964685', telefone: '998523415' },
    { nome_completo: 'joao Carlossss', cpf: '13391964685', telefone: '998523415' },
  ];

  for (let index = 0; index < propsData.length; index++) {
    const prop1 = Proprietario.create(
      propsData[index].nome_completo,
      propsData[index].cpf,
      propsData[index].telefone,
    );
    await propRepo.Create(prop1);
  }

  var propFindAll = await propRepo.findAll();

  for (let index = 0; index < propFindAll.length; index++) {
    const element = propFindAll[index];
    expect(element.nome_completo).toEqual(propsData[index].nome_completo);
    expect(element.cpf).toEqual(propsData[index].cpf);
    expect(element.telefone).toEqual(propsData[index].telefone);
  }
});

// test('create', () => {
//   expect(() => Veiculo.create(null, '', '')).toThrow('Http Exception');
//   try {
//     Veiculo.create(null, '', '');
//   } catch (error) {
//     expect(error.response).toEqual({
//       errors: {
//         id_marca: [
//           'id_marca must be a number conforming to the specified constraints',
//           'id_marca should not be empty',
//         ],
//         placa: ['placa should not be empty'],
//         cor: ['cor should not be empty'],
//       },
//     });
//   }
// });
