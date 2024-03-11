import { MarcaInMemoryRepo } from 'src/inMemory/inMemory-marca';
import { MarcaService } from './marca.service';
import { Marca } from './entities/marca.entity';

const marcaRepo = new MarcaInMemoryRepo();
const marcaService = new MarcaService(marcaRepo);

test('should first create', async () => {
  expect(() => Marca.create('')).toThrow('Http Exception');
  try {
    Marca.create('');
  } catch (error) {
    expect(error.response).toEqual({
      errors: {
        nome: ['Name from Marca is required'],
      },
    });
  }
});

test('Simple Create', () => {
  const marca = Marca.create('marcaTeste', 2);

  expect(marca).toBeInstanceOf(Marca);
  expect(marca.nome).toBe('marcaTeste');
  expect(marca.id).toBe(2);
});

test('find one', async () => {
  const marca = Marca.create('marcaTeste', 1);
  marcaRepo.Create(marca);
  const MarcaFound = await marcaRepo.GetById(marca.id);

  expect(MarcaFound).toBeInstanceOf(Marca);
  expect(MarcaFound.nome).toBe('marcaTeste');
  expect(MarcaFound.id).toBe(1);
});

test('Find All', async () => {
  const marcasData = [
    { nome: 'teste1', id: 1 },
    { nome: 'teste2', id: 2 },
  ];

  for (let index = 0; index < marcasData.length; index++) {
    const marca1 = Marca.create(marcasData[index].nome, marcasData[index].id);
    await marcaRepo.Create(marca1);
  }

  var marcaFindAll = await marcaRepo.findAll();

  for (let index = 0; index < marcaFindAll.length; index++) {
    const element = marcaFindAll[index];
    expect(element.nome).toStrictEqual(marcasData[index].nome);
    expect(element.id).toStrictEqual(marcasData[index].id);
  }
});

test('Update Marca', async () => {
  const marca2 = Marca.create('teste1', 4);
  await marcaRepo.Create(marca2);

  const newMarca = Marca.create('novoTeste', 4);
  const marcaUpdated = await marcaRepo.update(newMarca);

  expect(marcaUpdated.nome).toBe(newMarca.nome);
  expect(marcaUpdated.id).toBe(newMarca.id);
});
