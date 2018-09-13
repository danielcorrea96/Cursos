import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MundialService {
    constructor ( private http: HttpClient ) {
        console.log('Servicio listo');
     }

    getUrl() {
        const url = `https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json`;
        return this.http.get(url);
    }
    getPartidos() {
        return this.getUrl().pipe(map( data => data['rounds']));
    }
}
