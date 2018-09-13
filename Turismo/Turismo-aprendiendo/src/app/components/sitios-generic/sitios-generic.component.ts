import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitios-generic',
  templateUrl: './sitios-generic.component.html',
  styleUrls: ['./sitios-generic.component.css']
})
export class SitiosGenericComponent implements OnInit {
  @Input() santamart: any = {};
  @Input() index: number;
  @Output() sitioSelecionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.sitioSelecionado = new EventEmitter();
   }

  ngOnInit() {
  }
  verSitio() {
    console.log(this.index);
    this.router.navigate(['/sitios-turisticos', this.index]);
  }

}
