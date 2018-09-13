import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  urlImag = 'http://image.tmdb.org/t/p/w300';
  pelicula: any;
  constructor( public _peli: PeliculasService ,  private router: ActivatedRoute) {
   this.pelicula = [];
   }

  ngOnInit() {
    this.router.params.subscribe( params => {
      this.getPelicula(params['id']);
    });
  }
  getPelicula( id: string ) {
  this._peli.getPelicula( id ). subscribe ( pelicula => {
    console.log( pelicula );
    this.pelicula = pelicula;
  });
  }

}
