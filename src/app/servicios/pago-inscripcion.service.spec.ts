import { TestBed } from '@angular/core/testing';

import { PagoInscripcionService } from './pago-inscripcion.service';

describe('PagoInscripcionService', () => {
  let service: PagoInscripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoInscripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
