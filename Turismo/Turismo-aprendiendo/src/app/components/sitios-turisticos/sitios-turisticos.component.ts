import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SantaMartaService } from '../../servicios/santamarta.service';


@Component({
  selector: 'app-sitios-turisticos',
  templateUrl: './sitios-turisticos.component.html',
  styleUrls: ['./sitios-turisticos.component.css']
})
export class SitiosTuristicosComponent implements OnInit {
santamart: any = {};
  constructor( private activatedRoute: ActivatedRoute , private _santaMartaService: SantaMartaService ) {
    this.activatedRoute.params.subscribe( params => {
      this.santamart = this._santaMartaService.getSitioTurist(params['id']);
    });
  }

  ngOnInit() {
  }

}
