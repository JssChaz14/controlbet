import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsterList } from './tipster-list';

describe('TipsterList', () => {
  let component: TipsterList;
  let fixture: ComponentFixture<TipsterList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipsterList],
    }).compileComponents();

    fixture = TestBed.createComponent(TipsterList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
