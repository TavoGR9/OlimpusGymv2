import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasEntrenadorComponent } from './rutinas-entrenador.component';

describe('RutinasEntrenadorComponent', () => {
  let component: RutinasEntrenadorComponent;
  let fixture: ComponentFixture<RutinasEntrenadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinasEntrenadorComponent]
    });
    fixture = TestBed.createComponent(RutinasEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
