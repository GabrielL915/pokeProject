import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'poke-project-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  selectedPokemon: any;
  showDetails = false;
  @Input() pokemon: any;
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['pokemon']) {
        this.selectedPokemon = JSON.parse(params['pokemon']);
      }
    });
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  limitStatsValue(value: number): number {
    return Math.min(value, 100);
  }

  closeCard(): void {
    this.close.emit();
  }
}
