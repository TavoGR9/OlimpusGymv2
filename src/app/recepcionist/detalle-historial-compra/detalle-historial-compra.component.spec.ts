import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHistorialCompraComponent } from './detalle-historial-compra.component';

describe('DetalleHistorialCompraComponent', () => {
  let component: DetalleHistorialCompraComponent;
  let fixture: ComponentFixture<DetalleHistorialCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleHistorialCompraComponent]
    });
    fixture = TestBed.createComponent(DetalleHistorialCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
