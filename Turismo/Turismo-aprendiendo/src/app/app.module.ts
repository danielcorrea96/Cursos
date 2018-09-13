import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Componentes
import { AppComponent } from './app.component';
import { NavbarVerticalComponent } from './components/navbar-vertical/navbar-vertical.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SitiosComponent } from './components/sitios/sitios.component';
import { ContactoComponent } from './components/contacto/contacto.component';


// Rutas
import { APP_ROUTING } from './app.routes';
import { SitiosGenericComponent } from './components/sitios-generic/sitios-generic.component';

// Servicios
import { SantaMartaService } from './servicios/santamarta.service';
import { SitiosTuristicosComponent } from './components/sitios-turisticos/sitios-turisticos.component';
import { BuscandoSitioComponent } from './components/buscando-sitio/buscando-sitio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarVerticalComponent,
    InicioComponent,
    SitiosComponent,
    ContactoComponent,
    SitiosGenericComponent,
    SitiosTuristicosComponent,
    BuscandoSitioComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    SantaMartaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
