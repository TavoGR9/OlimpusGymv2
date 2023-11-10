import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesAltaComponent } from './sucursales-alta.component';

describe('SucursalesAltaComponent', () => {
  let component: SucursalesAltaComponent;
  let fixture: ComponentFixture<SucursalesAltaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucursalesAltaComponent]
    });
    fixture = TestBed.createComponent(SucursalesAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
