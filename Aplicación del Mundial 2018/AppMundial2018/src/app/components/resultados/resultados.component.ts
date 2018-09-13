import { Component, OnInit } from '@angular/core';
import { MundialService } from '../../services/mundial.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  ArrayCompleto: any[] = [];
  i: any[]  = [];
  constructor( private _mundial: MundialService ) {
    this._mundial.getPartidos().subscribe((data: any) => {
/*       console.log(data);
      console.log(data[0].matches[0].team1.name); */
      this.ArrayCompleto = data;
       console.log(this.ArrayCompleto);
       for (const muestra of data) {
          /* console.log(muestra); */
          for (const muestra1 of muestra.matches) {
            console.log(muestra1);
            this.i.push(muestra1);
          }
       }

        });
  }
  ngOnInit() {
  }


}
