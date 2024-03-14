import { Estoque } from 'src/tables/estoque/entities/estoque.entity';
import { Marca } from 'src/tables/marca/entities/marca.entity';
import { Proprietario } from 'src/tables/proprietario/entities/proprietario.entity';
import { Veiculo } from 'src/tables/veiculos/entities/veiculo.entity';
import { User } from 'src/users/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const conn: DataSourceOptions = {
  type: 'postgres',
  host: 'postgresdb',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'crud2',
  entities: [Veiculo, Marca, User, Proprietario, Estoque],
  migrations: ['dist/migrations/*.js'],
  synchronize: true,
  logging: true,
};

const dataSource = new DataSource(conn);
export default dataSource;
