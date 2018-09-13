import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComediaComponent } from './components/comedia/comedia.component';
import { KidsComponent } from './components/kids/kids.component';
import { PopularesComponent } from './components/populares/populares.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscandoPComponent } from './components/buscando-p/buscando-p.component';



export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'populares', component: PopularesComponent },
    { path: 'Kids', component: KidsComponent },
    { path: 'comedia', component: ComediaComponent },
    { path: 'pelicula/:id', component: PeliculaComponent },
    { path: 'buscar', component: BuscandoPComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
