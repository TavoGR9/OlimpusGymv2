import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesEditarComponent } from './sucursales-editar.component';

describe('SucursalesEditarComponent', () => {
  let component: SucursalesEditarComponent;
  let fixture: ComponentFixture<SucursalesEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucursalesEditarComponent]
    });
    fixture = TestBed.createComponent(SucursalesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
