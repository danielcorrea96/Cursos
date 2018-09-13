import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }
  getQuery ( query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const  headers = new HttpHeaders({
      'Authorization': 'Bearer BQCOq_kKT9caBtfaXS5C9o_oDtkuZX72XHuwRMb0uw5_TiaVTxLmyTbrPVCxlmqdDa7cm5IbHh5rVzs_iaQ'
      });
      return this.http.get(url, { headers });
  }

  getNewReleases() {
     return this.getQuery('browse/new-releases')
     .pipe( map( data => data['albums'].items));
  }

  getArtistas( termino: string) {
       return this.getQuery(`search?query=${termino}&type=artist&market=CO&offset=0&limit=15`)
       .pipe (map( data => data['artists'].items));
  }

  getArtista( id: string) {
    return this.getQuery(`artists/${ id }`);
  }
  getTopTracks( id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe (map( data => data['tracks']));
  }

}
