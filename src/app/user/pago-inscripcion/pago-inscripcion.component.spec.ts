import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoInscripcionComponent } from './pago-inscripcion.component';

describe('PagoInscripcionComponent', () => {
  let component: PagoInscripcionComponent;
  let fixture: ComponentFixture<PagoInscripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagoInscripcionComponent]
    });
    fixture = TestBed.createComponent(PagoInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
