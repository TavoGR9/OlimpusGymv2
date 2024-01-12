import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeEmergentesComponent } from './mensaje-emergentes.component';

describe('MensajeEmergentesComponent', () => {
  let component: MensajeEmergentesComponent;
  let fixture: ComponentFixture<MensajeEmergentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeEmergentesComponent]
    });
    fixture = TestBed.createComponent(MensajeEmergentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
