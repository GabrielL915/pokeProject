import { Route } from '@angular/router';
import { DashboardComponent, LoginComponent, RegisterComponent} from '@poke-project/feature';

export const appRoutes: Route[] = [
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
    /* {
        path: 'pokemon',
        loadChildren: () =>
            import('@poke-project/feature').then((m) => m.FeatureModule),
    } */
];
