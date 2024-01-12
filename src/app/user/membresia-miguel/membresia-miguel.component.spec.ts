import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresiaMiguelComponent } from './membresia-miguel.component';

describe('MembresiaMiguelComponent', () => {
  let component: MembresiaMiguelComponent;
  let fixture: ComponentFixture<MembresiaMiguelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembresiaMiguelComponent]
    });
    fixture = TestBed.createComponent(MembresiaMiguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
