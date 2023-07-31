import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@poke-project/api';
import { Router } from '@angular/router';

@Component({
  selector: 'poke-project-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  dados: any[] = [];
  limit = 9;
  offset = 0;
  selectedPokemon: any;

  colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
  };

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService
      .getDados(this.limit, this.offset)
      .subscribe((response) => {
        console.log(response);
        this.dados = this.dados.concat(
          response.map((pokemon: any) => ({
            ...pokemon,
            id: pokemon.id.toString().padStart(3, '0'),
          }))
        );
      });
  }

  loadMore(): void {
    this.offset += this.limit;
    this.getPokemons();
  }

  getTypeColor(type: string): string {
    const lowerCaseType = type.toLowerCase() as keyof typeof this.colors;
    return this.colors[lowerCaseType] || 'transparent';
  }

  showDetails(pokemon: any): void {
    this.selectedPokemon = pokemon;
  }
}
