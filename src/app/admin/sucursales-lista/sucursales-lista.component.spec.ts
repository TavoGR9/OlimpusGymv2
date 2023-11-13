import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesListaComponent } from './sucursales-lista.component';

describe('SucursalesListaComponent', () => {
  let component: SucursalesListaComponent;
  let fixture: ComponentFixture<SucursalesListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucursalesListaComponent]
    });
    fixture = TestBed.createComponent(SucursalesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
