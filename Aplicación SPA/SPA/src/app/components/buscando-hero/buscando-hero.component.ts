import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-buscando-hero',
  templateUrl: './buscando-hero.component.html',
  styleUrls: ['./buscando-hero.component.css']
})
export class BuscandoHeroComponent implements OnInit {
  heroes: any [  ] = [];
  termino: string;
  constructor( private activatedRoute: ActivatedRoute, private _heroesServicies: HeroesService) {   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
    this.termino = params['termino'];
    this.heroes =  this._heroesServicies.buscarHeroes(params['termino']);
    console.log(this.heroes);
    });
  }

}
