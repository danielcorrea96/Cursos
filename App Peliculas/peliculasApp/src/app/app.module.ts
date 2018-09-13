import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PeliculasService } from './services/peliculas.service';
import { HttpModule , JsonpModule} from '@angular/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopularesComponent } from './components/populares/populares.component';
import { KidsComponent } from './components/kids/kids.component';
import { ComediaComponent } from './components/comedia/comedia.component';
import { ROUTES } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscandoPComponent } from './components/buscando-p/buscando-p.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopularesComponent,
    KidsComponent,
    ComediaComponent,
    HomeComponent,
    PeliculaComponent,
    BuscandoPComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(ROUTES, {useHash:  true})
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
