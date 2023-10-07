import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscardComponent } from './detailscard.component';

describe('DetailscardComponent', () => {
  let component: DetailscardComponent;
  let fixture: ComponentFixture<DetailscardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailscardComponent]
    });
    fixture = TestBed.createComponent(DetailscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
