import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SantaMartaService } from '../../servicios/santamarta.service';


@Component({
  selector: 'app-buscando-sitio',
  templateUrl: './buscando-sitio.component.html',
  styleUrls: ['./buscando-sitio.component.css']
})
export class BuscandoSitioComponent implements OnInit {
  santamart: any [] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute, private _santamartaservice: SantaMartaService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params ['termino'];
      this.santamart = this._santamartaservice.buscarSitio(params['termino']);
      console.log(this.santamart);
    });
  }

}
