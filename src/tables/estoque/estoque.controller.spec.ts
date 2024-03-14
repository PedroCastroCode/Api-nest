import { MarcaInMemoryRepo } from 'src/inMemory/inMemory-marca';
import { MarcaService } from '../marca/marca.service';
import { Estoque } from './entities/estoque.entity';
import { EstoqueInMemoryRepo } from 'src/inMemory/inMemory-estoque';
import { EstoqueService } from './estoque.service';

const estoqueRepo = new EstoqueInMemoryRepo();
const estoqueService = new EstoqueService(estoqueRepo);

test('Simple Create Estoque', async () => {
  const newProduct = await Estoque.create('notebook', 1, 200);

  expect(newProduct).toBeInstanceOf(Estoque);
  expect(newProduct.item).toBe('notebook');
  expect(newProduct.quantidade).toBe(1);
  expect(newProduct.preco).toBe(200);
});

test('error msg Estoque', async () => {
  expect(() => Estoque.create('', null, null)).toThrow('Http Exception');
  try {
    Estoque.create('', null, null);
  } catch (error) {
    expect(error.response).toEqual({
      errors: {
        item: ['item from estoque is required'],
        quantidade: [
          'quantidade from estoque is required',
          'quantidade must be a number conforming to the specified constraints',
        ],
      },
    });
  }
});
