import { Module } from '@nestjs/common';
import { UsersService } from './providers/users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './providers/users.providers';
import { DatabaseModule } from '../database/database.module';
import { UsersServiceImpl } from './providers/users.service.impl';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    {
      provide: UsersService,
      useClass: UsersServiceImpl,
    },
    ...usersProviders,
  ],
  exports: [UsersService],
})
export class UsersModule {}
