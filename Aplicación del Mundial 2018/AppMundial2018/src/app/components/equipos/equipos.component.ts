import { Component, OnInit } from '@angular/core';
import { MundialService } from '../../services/mundial.service';
@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  ArrayCompleto: any[] = [];
  equipo: any[] = [];
  constructor( private _mundial: MundialService) {
    this._mundial.getPartidos().subscribe((data: any) => {

      for ( const equipos of data ) {
        for ( const muestra2 of equipos.matches) {
        this.equipo.push(muestra2.team1.name);
        this.equipo =  this.equipo.filter(function(elem,  index,  self) {
            return index === self.indexOf(elem);
            });
            console.log(this.equipo);
        }
      }
    });
   }

  ngOnInit() {
  }


}
