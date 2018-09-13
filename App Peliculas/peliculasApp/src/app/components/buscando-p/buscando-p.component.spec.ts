import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscandoPComponent } from './buscando-p.component';

describe('BuscandoPComponent', () => {
  let component: BuscandoPComponent;
  let fixture: ComponentFixture<BuscandoPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscandoPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscandoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
