import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',

})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private route: ActivatedRoute) {
    this.route.parent.params.subscribe( parametros => {
      console.log('Ruta HIJA USUARIO NNUEVO');
      console.log(parametros);
    });
  }

  ngOnInit() {
  }

}
