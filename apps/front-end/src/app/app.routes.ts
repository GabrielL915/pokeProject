import { Route } from '@angular/router';
import { DashboardComponent} from '@poke-project/feature';

export const appRoutes: Route[] = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent},
];
