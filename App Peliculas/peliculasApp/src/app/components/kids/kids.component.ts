import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  urlImag = 'http://image.tmdb.org/t/p/w300';
  PelisPopu: any[] = [];
  constructor( public _peli: PeliculasService, public router: Router  ) {
    this._peli.getPeliNiños().subscribe( (data: any) => {
      console.log ( data ),
      this.PelisPopu = data.results;
      console.log ( this.PelisPopu );
    });
   }

  ngOnInit() {
  }

  verDetalle( id: string ) {
    this.router.navigate(['/pelicula', id]);
    }

}
