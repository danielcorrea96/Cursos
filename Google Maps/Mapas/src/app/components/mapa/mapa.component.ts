import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import {MatSnackBar} from '@angular/material'; // cada que necesitemos un componente de Materiañ, se debe inyectar in el constructor,
import {MatDialog, MatDialogRef} from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({                                   // y ademas en el module.

  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = []; // vacío.
  lat = 51.678418;
  lng = 7.809007;
  zoom: number;
  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {
  if ( localStorage.getItem('marcadores') ) {
    this.marcadores = JSON.parse(localStorage.getItem('marcadores')); // debido a que lo que regresa el Local Storage es un string,
     }                                                                   //  y marcadores es un arreglo, debemos devolverlo con JSON.parse
   }

  ngOnInit() {
  }
  agregarMarcador( evento ) {
     console.log( evento.coords );
     const nuevoMarcador = new Marcador(evento.coords.lat , evento.coords.lng);
     this.marcadores.push(nuevoMarcador); // agregamos el nuevo marcador al Array.
     this.guardarStorage();
     this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
  }
  guardarStorage() { // el local storage solo permite guardar string's.
  // tslint:disable-next-line:max-line-length
  localStorage.setItem('marcadores', JSON.stringify(this.marcadores)); // debo convertir el arreglo de marcadores a string, para eso es JSON.stringify
  }

  borrarMarcador(i: number) {
  this.marcadores.splice( i, 1); // splice para borrar componentes del arreglo. Funcion de Typescript.s
  this.guardarStorage();
  this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 2000 });
  }

  editarMarcador( marcador: Marcador ) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (!result ) {
        return ;
      }
      marcador.titulo = result.titulo;
      marcador.desc = result.desc;
      this.guardarStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 2000 });
    });


  }


}
