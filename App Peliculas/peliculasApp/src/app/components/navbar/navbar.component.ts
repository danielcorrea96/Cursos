import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private route: Router, private _peli: PeliculasService ) { }

  ngOnInit() {
  }
  buscarHeroe(termino: string) {
    this.route.navigate(['/buscar', termino]);
    }
  buscarPelic ( termino: string ) {
      this._peli.buscarPelicula( termino ).subscribe( data => console.log( data ));

  }

}
