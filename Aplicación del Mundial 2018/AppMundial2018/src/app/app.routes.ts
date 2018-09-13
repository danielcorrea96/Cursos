import { Routes } from '@angular/router';
import { EquiposComponent } from './components/equipos/equipos.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

export const ROUTES: Routes = [
    {path: 'resultados', component: ResultadosComponent},
    {path: 'equipos', component: EquiposComponent},
    {path: '', pathMatch: 'full', redirectTo: 'resultados'},
    {path: '**', pathMatch: 'full', redirectTo: 'resultados'}
];
