import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  fireURL = 'https://heroesapp-68243.firebaseio.com/heroes.json';
  constructor(private http: Http) { }

  heroeURL = 'https://heroesapp-68243.firebaseio.com/heroes/';
  nuevoHeroe ( heroe: Heroe ) {
  const body = JSON.stringify( heroe );
  const headers = new Headers ( {
      'Content-Type': 'application/json'
  });
  return this.http.post( this.fireURL,  body, {headers}).pipe(map( res => {
    console.log( res.json() );
    return res.json();
  }));
  }
  actualizarHeroe ( heroe: Heroe, key$: string ) {
    const body = JSON.stringify( heroe );
    const headers = new Headers ( {
        'Content-Type': 'application/json'
    });
    const url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.put( url ,  body, {headers}).pipe(map( res => {
      console.log( res.json() );
      return res.json();
    }));
    }
    getHeroe( key$: string) {
      const url = `${ this.heroeURL }/${ key$ }.json`;
       return this.http.get( url ).pipe(map( res => res.json() ));
    }

    getHeroes( ) {
             return this.http.get( this.fireURL ).pipe(map( res => res.json() ));
    }

    borrarheroe (key: string) {
    const url = `${ this.heroeURL }/${ key }.json`;
    return this.http.delete( url ).pipe(map( res => res.json()));
    }
}
