import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalInsertComponent } from './sucursal-insert.component';

describe('SucursalInsertComponent', () => {
  let component: SucursalInsertComponent;
  let fixture: ComponentFixture<SucursalInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucursalInsertComponent]
    });
    fixture = TestBed.createComponent(SucursalInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
