import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitiosGenericComponent } from './sitios-generic.component';

describe('SitiosGenericComponent', () => {
  let component: SitiosGenericComponent;
  let fixture: ComponentFixture<SitiosGenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitiosGenericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitiosGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
