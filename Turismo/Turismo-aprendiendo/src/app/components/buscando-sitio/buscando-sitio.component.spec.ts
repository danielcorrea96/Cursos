import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscandoSitioComponent } from './buscando-sitio.component';

describe('BuscandoSitioComponent', () => {
  let component: BuscandoSitioComponent;
  let fixture: ComponentFixture<BuscandoSitioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscandoSitioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscandoSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
