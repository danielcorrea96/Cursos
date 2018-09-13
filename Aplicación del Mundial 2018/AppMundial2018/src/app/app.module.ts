import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Rutas
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { EquiposComponent } from './components/equipos/equipos.component';


// Servicios
import { MundialService } from './services/mundial.service';
import { BanderasPipe } from './pipes/banderas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResultadosComponent,
    EquiposComponent,
    BanderasPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    MundialService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
