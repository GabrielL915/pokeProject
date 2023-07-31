import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthModule } from './auth/auth.module';
import { PokemonModule } from '../pokemon/pokemon.module';

@Module({
  imports: [UsersModule, AuthModule, PokemonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
