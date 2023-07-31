import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { LoginService } from './login.service';
import { PokemonService } from './pokemon.service';

@NgModule({
  imports: [CommonModule,],
  providers: [ApiService, LoginService, PokemonService],
})
export class ApiModule {}
