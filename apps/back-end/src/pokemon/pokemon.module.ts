import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { PokemonServiceImpl } from './pokemon.service.impl';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PokemonController],
  providers: [
    {
      provide: PokemonService,
      useClass: PokemonServiceImpl,
    },
  ],
})
export class PokemonModule {}
