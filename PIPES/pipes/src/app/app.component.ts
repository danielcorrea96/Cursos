import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
nombre = 'Daniel';
nombre2 = 'daniEl alFonso coRRea angarita';
arreglo = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];

PI = Math.PI;
a = 0.234;
salario = 1234.5;
heroe = {
  nombre: 'Logan',
  clave: 'Wolverine',
  edad : 500,
  direccion: {
    calle : 'Primera',
    casa: '19'

  }
};

// tslint:disable-next-line:no-shadowed-variable
valordePromesa = new Promise(( resolve, reject ) => {
  setTimeout( ( ) => resolve ('Llegó la data'), 3500 );
} );

fecha = new Date ();
video = 'LhbufPL_9ME';
activar = true;
}
