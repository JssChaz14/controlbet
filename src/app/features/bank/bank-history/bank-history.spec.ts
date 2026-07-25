import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankHistory } from './bank-history';

describe('BankHistory', () => {
  let component: BankHistory;
  let fixture: ComponentFixture<BankHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(BankHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
