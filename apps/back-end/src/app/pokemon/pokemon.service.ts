import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export abstract class PokemonService {
  abstract findAll(limit?: number, offset?: number);

  abstract findOne(id: number);
}
