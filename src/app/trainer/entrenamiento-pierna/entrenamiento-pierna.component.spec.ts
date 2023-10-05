import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenamientoPiernaComponent } from './entrenamiento-pierna.component';

describe('EntrenamientoPiernaComponent', () => {
  let component: EntrenamientoPiernaComponent;
  let fixture: ComponentFixture<EntrenamientoPiernaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrenamientoPiernaComponent]
    });
    fixture = TestBed.createComponent(EntrenamientoPiernaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
