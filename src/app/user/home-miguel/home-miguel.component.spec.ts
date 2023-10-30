import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMiguelComponent } from './home-miguel.component';

describe('HomeMiguelComponent', () => {
  let component: HomeMiguelComponent;
  let fixture: ComponentFixture<HomeMiguelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMiguelComponent]
    });
    fixture = TestBed.createComponent(HomeMiguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
