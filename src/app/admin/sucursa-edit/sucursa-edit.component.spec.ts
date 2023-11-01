import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursaEditComponent } from './sucursa-edit.component';

describe('SucursaEditComponent', () => {
  let component: SucursaEditComponent;
  let fixture: ComponentFixture<SucursaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucursaEditComponent]
    });
    fixture = TestBed.createComponent(SucursaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
