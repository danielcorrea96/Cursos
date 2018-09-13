import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscando-p',
  templateUrl: './buscando-p.component.html',
  styleUrls: ['./buscando-p.component.css']
})
export class BuscandoPComponent implements OnInit {
  @Input() populares: any = {};
  urlImag = 'http://image.tmdb.org/t/p/w300';
  peliculas: any[] = [];
  termino: string;
  constructor( private _peli: PeliculasService, public router: Router) {
    console.log( this.populares );
  }

  ngOnInit() {  }
  buscar ( termino: string ) {
    console.log( termino );
    this._peli.buscarPelicula( termino ).subscribe ( (data: any) => {
      // console.log( data ),
      this.peliculas = data.results;
      console.log ( this.peliculas );
    }
  );
  }

  verDetalle( id: string ) {
    this.router.navigate(['/pelicula', id]);
    }


}
