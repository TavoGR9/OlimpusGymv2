import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosMiguelComponent } from './pagos-miguel.component';

describe('PagosMiguelComponent', () => {
  let component: PagosMiguelComponent;
  let fixture: ComponentFixture<PagosMiguelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagosMiguelComponent]
    });
    fixture = TestBed.createComponent(PagosMiguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
