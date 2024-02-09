import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPlanComponent } from './alta-categoria.component';

describe('AltaPlanComponent', () => {
  let component: AltaPlanComponent;
  let fixture: ComponentFixture<AltaPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaPlanComponent]
    });
    fixture = TestBed.createComponent(AltaPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
