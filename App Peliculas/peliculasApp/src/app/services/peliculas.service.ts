import { Injectable } from '@angular/core';
import { Http , Jsonp} from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey = '9330287c75fb9dd530d5a83a6fe9e1bd';
  private urlMovie = 'https://api.themoviedb.org/3';
  constructor( private jsonp: Jsonp ) { }

  getPopulares() {
    const url = `${this.urlMovie}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
    .pipe(map(res => res.json()));
  }

  buscarPelicula( texto: string) {
  // tslint:disable-next-line:max-line-length
  const url = `${this.urlMovie}/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
  return this.jsonp.get( url )
  .pipe(map(res => res.json() ));
  }
  getPeliNiños() {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMovie }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
    .pipe(map(res => res.json() ));
  }

  getComedia() {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMovie }/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
    .pipe(map(res => res.json() ));
  }
  getPelicula( id: string) {
    const url = `${ this.urlMovie }/movie/${ id }?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
    .pipe(map(res => res.json() ));
  }


}
