// tslint:disable-next-line:max-line-length
import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,  OnDestroy, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>

  <app-css></app-css>
  <p>
      Hola mundo desde app.component
  </p>

  <app-clases></app-clases>

  <p [appResaltado]="'blue'">Hola Mundo</p>

  <br><br>
  <hr>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
// tslint:disable-next-line:max-line-length
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,  OnDestroy, AfterViewChecked {

  constructor() {
    console.log('Constructor');
  }

  ngOnInit() {
  console.log('ngOnInit');
  }

  ngOnChanges() {
  console.log('ngOnChanges');
  }

  ngDoCheck() {
  console.log('ngDoCheck');
  }

  ngAfterContentInit() {
  console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
  console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
  console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
  console.log('ngOnDestroy');
  }

  ngAfterViewChecked() {
  console.log('ngAfterViewChecked');
  }
}
