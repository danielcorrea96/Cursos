import { Component, OnInit } from '@angular/core';
import { SantaMartaService, Santa } from '../../servicios/santamarta.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.component.html',
  styleUrls: ['./sitios.component.css']
})
export class SitiosComponent implements OnInit {
  santamart: Santa[] = [];
  constructor(private _santamartaService: SantaMartaService,  private router: Router ) {  }
  ngOnInit() {
    this.santamart = this._santamartaService.getStios();
    console.log(this.santamart);
  }
  verSitio (idx: number) {
    this.router.navigate(['/sitios', idx]);
  }

}
