import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (connection: DataSource) => connection.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
