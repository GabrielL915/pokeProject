import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'pguser',
        password: 'pgpassword',
        database: 'nestjs',
        entities: [User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
