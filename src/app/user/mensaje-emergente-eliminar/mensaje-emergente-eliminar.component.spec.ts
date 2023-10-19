import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeEmergenteEliminarComponent } from './mensaje-emergente-eliminar.component';

describe('MensajeEmergenteEliminarComponent', () => {
  let component: MensajeEmergenteEliminarComponent;
  let fixture: ComponentFixture<MensajeEmergenteEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeEmergenteEliminarComponent]
    });
    fixture = TestBed.createComponent(MensajeEmergenteEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
