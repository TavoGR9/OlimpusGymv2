import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletcardsComponent } from './walletcards.component';

describe('WalletcardsComponent', () => {
  let component: WalletcardsComponent;
  let fixture: ComponentFixture<WalletcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalletcardsComponent]
    });
    fixture = TestBed.createComponent(WalletcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
