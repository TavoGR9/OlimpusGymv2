import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanvirtualComponent } from './planvirtual.component';

describe('PlanvirtualComponent', () => {
  let component: PlanvirtualComponent;
  let fixture: ComponentFixture<PlanvirtualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanvirtualComponent]
    });
    fixture = TestBed.createComponent(PlanvirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
