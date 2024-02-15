import { Marca } from 'src/tables/marca/entities/marca.entity';
import { Proprietario } from 'src/tables/proprietario/entities/proprietario.entity';
import { User } from 'src/tables/users/entities/user.entity';
import { Veiculo } from 'src/tables/veiculos/entities/veiculo.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const conn: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'crud2',
  entities: [Veiculo, Marca, User, Proprietario],
  migrations: ['dist/migrations/*.js'],
  synchronize: true,
  logging: true,
};
const dataSource = new DataSource(conn);
export default dataSource;
