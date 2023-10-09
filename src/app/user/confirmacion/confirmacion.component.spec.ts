import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionComponent } from './confirmacion.component';

describe('ConfirmacionComponent', () => {
  let component: ConfirmacionComponent;
  let fixture: ComponentFixture<ConfirmacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacionComponent]
    });
    fixture = TestBed.createComponent(ConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
