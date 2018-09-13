import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscandoHeroComponent } from './buscando-hero.component';

describe('BuscandoHeroComponent', () => {
  let component: BuscandoHeroComponent;
  let fixture: ComponentFixture<BuscandoHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscandoHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscandoHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
