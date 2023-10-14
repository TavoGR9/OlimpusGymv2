import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaRecepcionComponent } from './alta-recepcion.component';

describe('AltaRecepcionComponent', () => {
  let component: AltaRecepcionComponent;
  let fixture: ComponentFixture<AltaRecepcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaRecepcionComponent]
    });
    fixture = TestBed.createComponent(AltaRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
