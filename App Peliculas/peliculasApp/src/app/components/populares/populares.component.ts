import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent implements OnInit {
  @Input() index: number;
  PelisPopu: any[] = [];
  urlImag = 'http://image.tmdb.org/t/p/w300';

  constructor( public _peli: PeliculasService, public router: Router ) {
    this._peli.getPopulares().subscribe( (data: any) => {
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
