import { PokemonService } from './pokemon.service';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, switchMap, forkJoin } from 'rxjs';
import { map as rxMap } from 'rxjs/operators';

@Injectable()
export class PokemonServiceImpl implements PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private readonly httpService: HttpService) {}

  findAll(limit?: number, offset?: number) {
    return this.getPokemonUrls(limit, offset).pipe(
      switchMap((pokemonUrls) => {
        return forkJoin(
          pokemonUrls.map((pokemon) => {
            return this.httpService.get(pokemon.url).pipe(
              rxMap((response) => {
                return {
                  name: response.data.name,
                  id: response.data.id,
                  height: response.data.height,
                  weight: response.data.weight,
                  image: response.data.sprites.front_default,
                  types: response.data.types.map((type) => {
                    return {
                      name: type.type.name,
                    };
                  }),
                };
              }),
            );
          }),
        );
      }),
    );
  }

  findOne(id: number) {
    return this.httpService.get(`${this.baseUrl}/${id}`).pipe(
      rxMap((response) => {
        return {
          name: response.data.name,
          id: response.data.id,
          height: response.data.height,
          weight: response.data.weight,
          image: response.data.sprites.front_default,
          types: response.data.types.map((type) => {
            return {
              name: type.type.name,
            };
          }),
        };
      }),
    );
  }

  private getPokemonUrls(limit?: number, offset?: number): Observable<any[]> {
    if (limit && offset) {
      return this.httpService
        .get(`${this.baseUrl}?limit=${limit}&offset=${offset}`)
        .pipe(
          rxMap((response) => {
            return response.data.results.map((pokemon) => {
              return {
                url: pokemon.url,
              };
            });
          }),
        );
    } else {
      return this.httpService.get(this.baseUrl).pipe(
        rxMap((response) => {
          return response.data.results.map((pokemon) => {
            return {
              url: pokemon.url,
            };
          });
        }),
      );
    }
  }
}
