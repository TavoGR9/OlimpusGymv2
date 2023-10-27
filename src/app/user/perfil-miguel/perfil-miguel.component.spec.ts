import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMiguelComponent } from './perfil-miguel.component';

describe('PerfilMiguelComponent', () => {
  let component: PerfilMiguelComponent;
  let fixture: ComponentFixture<PerfilMiguelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilMiguelComponent]
    });
    fixture = TestBed.createComponent(PerfilMiguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
