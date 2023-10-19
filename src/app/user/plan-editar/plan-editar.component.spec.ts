import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEditarComponent } from './plan-editar.component';

describe('PlanEditarComponent', () => {
  let component: PlanEditarComponent;
  let fixture: ComponentFixture<PlanEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanEditarComponent]
    });
    fixture = TestBed.createComponent(PlanEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
