import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOptionBarComponent } from './user-option-bar.component';

describe('UserOptionBarComponent', () => {
  let component: UserOptionBarComponent;
  let fixture: ComponentFixture<UserOptionBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserOptionBarComponent]
    });
    fixture = TestBed.createComponent(UserOptionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
