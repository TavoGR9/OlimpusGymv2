import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanListaComponent } from './plan-lista.component';

describe('PlanListaComponent', () => {
  let component: PlanListaComponent;
  let fixture: ComponentFixture<PlanListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanListaComponent]
    });
    fixture = TestBed.createComponent(PlanListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
