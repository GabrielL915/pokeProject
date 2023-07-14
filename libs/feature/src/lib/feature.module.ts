import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DashboardComponent,
    LoginComponent,
    PokemonComponent
  ],
})
export class FeatureModule {}
