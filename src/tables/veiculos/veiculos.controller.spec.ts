import { InMemoryRepo } from 'src/inMemory/abstract/InMemoryRepo';
import { Veiculo } from './entities/veiculo.entity';
import { VeiculosInMemoryRepo } from 'src/inMemory/inMemory-veiculos';
import { VeiculosService } from './veiculos.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';

const veiculoRepo = new VeiculosInMemoryRepo();
const veiculoService = new VeiculosService(veiculoRepo);

test('create', () => {
  expect(() => Veiculo.create(null, '', '')).toThrow('Http Exception');
  try {
    Veiculo.create(null, '', '');
  } catch (error) {
    expect(error.response).toEqual({
      errors: {
        id_marca: [
          'id_marca must be a number conforming to the specified constraints',
          'id_marca should not be empty',
        ],
        placa: ['placa should not be empty'],
        cor: ['cor should not be empty'],
      },
    });
  }
});

test('create without error', () => {
  const veiculo = Veiculo.create(21, '10ggfg4', 'amarelo', 1);

  expect(veiculo).toBeInstanceOf(Veiculo);
  expect(veiculo.id_marca).toBe(21);
  expect(veiculo.placa).toBe('10ggfg4');
  expect(veiculo.cor).toBe('amarelo');
  expect(veiculo.id).toBe(1);
});

test('create in memory', async () => {
  veiculoService.create({
    id_marca: 21,
    placa: '10ggfg4',
    cor: 'amarelo',
  } as CreateVeiculoDto);

  const veiculoCriado = await veiculoRepo.GetById(1);

  expect(veiculoCriado.id_marca).toBe(21);
  expect(veiculoCriado.placa).toBe('10ggfg4');
  expect(veiculoCriado.cor).toBe('amarelo');
});

test('create in memory', async () => {
  await veiculoService.create({
    id_marca: 21,
    placa: '10ggfg4',
    cor: 'amarelo',
  } as CreateVeiculoDto);

  const veiculoCriado = await veiculoService.findOne(1);

  expect(veiculoCriado.id_marca).toBe(21);
  expect(veiculoCriado.placa).toBe('10ggfg4');
  expect(veiculoCriado.cor).toBe('amarelo');
});

test('create in memory', async () => {
  veiculoService.create({
    id_marca: 22,
    placa: '1gfadf4',
    cor: 'verde',
  } as CreateVeiculoDto);

  const veiculoCriado = await veiculoRepo.GetById(3);

  expect(veiculoCriado.id_marca).toBe(22);
  expect(veiculoCriado.placa).toBe('1gfadf4');
  expect(veiculoCriado.cor).toBe('verde');
});

test('create', async () => {
  try {
    await veiculoService.create({
      id_marca: null,
      placa: '',
      cor: '',
    } as CreateVeiculoDto);
  } catch (error) {
    expect(error.response).toEqual({
      errors: {
        id_marca: [
          'id_marca must be a number conforming to the specified constraints',
          'id_marca should not be empty',
        ],
        placa: ['placa should not be empty'],
        cor: ['cor should not be empty'],
      },
    });
  }
});

// test('create with valid data', async () => {
//   veiculoService.create({
//     id_marca: 23,
//     placa: '1gfadf4',
//     cor: 'verde',
//   } as CreateVeiculoDto);

//   const veiculoCriado = await veiculoRepo.GetById(2);

//   expect(veiculoCriado.id_marca).toBe(23);
//   expect(veiculoCriado.placa).toBe('1gfadf4');
//   expect(veiculoCriado.cor).toBe('verde');
// });

// test('find one', async () => {
//   const veiculoCriado = await veiculoRepo.GetById(2);

//   expect(veiculoCriado.id_marca).toBe(22);
//   expect(veiculoCriado.placa).toBe('10ggfg4');
//   expect(veiculoCriado.cor).toBe('amarelo');
//   expect(veiculoCriado.id).toBe(2);
// });

test('Update Veiculo', async () => {
  const veiculo = Veiculo.create(3, '8y13fd', 'violeta', 1);
  await veiculoRepo.Create(veiculo);

  const newVeiculo = Veiculo.create(3, '8y13fd', 'violeta', 1);
  const veiculoUpdated = await veiculoRepo.update(newVeiculo);

  expect(veiculoUpdated.id_marca).toBe(newVeiculo.id_marca);
  expect(veiculoUpdated.placa).toBe(newVeiculo.placa);
  expect(veiculoUpdated.cor).toBe(newVeiculo.cor);
  expect(veiculoUpdated.id).toBe(newVeiculo.id);
});
