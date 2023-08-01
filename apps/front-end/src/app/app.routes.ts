import { Route } from '@angular/router';
import { DashboardComponent} from '@poke-project/feature';
import { FeatureModule } from '@poke-project/feature';
import { LoginComponent } from 'libs/feature/src/lib/login/login.component';

export const appRoutes: Route[] = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    /* {
        path: 'pokemon',
        loadChildren: () =>
            import('@poke-project/feature').then((m) => m.FeatureModule),
    } */
];
