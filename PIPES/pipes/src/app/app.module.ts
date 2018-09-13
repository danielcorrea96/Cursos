
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';


import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { VerContrasenaPipe } from './pipes/ver-contrasena.pipe';
registerLocaleData(localeEs);

@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent, CapitalizadoPipe, DomSeguroPipe, VerContrasenaPipe ],
 providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
 bootstrap: [ AppComponent ]
})
export class AppModule {  }
