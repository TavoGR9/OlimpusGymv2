import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMiguelComponent } from './header-miguel.component';

describe('HeaderMiguelComponent', () => {
  let component: HeaderMiguelComponent;
  let fixture: ComponentFixture<HeaderMiguelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderMiguelComponent]
    });
    fixture = TestBed.createComponent(HeaderMiguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
