
import { RouterModule , Routes } from '@angular/router';
import { Component } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';
import { SitiosComponent } from './components/sitios/sitios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SitiosGenericComponent } from './components/sitios-generic/sitios-generic.component';
import { SitiosTuristicosComponent } from './components/sitios-turisticos/sitios-turisticos.component';
import { BuscandoSitioComponent } from './components/buscando-sitio/buscando-sitio.component';




const APP_ROUTES: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'sitios', component: SitiosComponent},
    {path: 'sitios-turisticos/:id', component: SitiosTuristicosComponent},
    {path: 'buscar/:termino', component: BuscandoSitioComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', pathMatch: 'full',  redirectTo: 'inicio'}
];
export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES);
