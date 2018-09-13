import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitiosTuristicosComponent } from './sitios-turisticos.component';

describe('SitiosTuristicosComponent', () => {
  let component: SitiosTuristicosComponent;
  let fixture: ComponentFixture<SitiosTuristicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitiosTuristicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitiosTuristicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
