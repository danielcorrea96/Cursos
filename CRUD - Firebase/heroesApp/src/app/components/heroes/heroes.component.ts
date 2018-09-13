import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];
  loading = true;
  constructor( private _heroeService: HeroesService) {
    this._heroeService.getHeroes().subscribe( data => {
       console.log( data );
     //  this.loading = false;
      setTimeout( () => {
        this.loading = false;
        this.heroes = data;
      }, 3000);
    });
   }

  ngOnInit() {
  }
  borraHeroe( key: string ) {
    this._heroeService.borrarheroe( key )
    .subscribe( respuesta => {
      if (respuesta) {
      console.error( respuesta );
      } else {
      delete this.heroes[ key ];
      }
    });
   }

}
