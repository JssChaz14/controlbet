import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickForm } from './pick-form';

describe('PickForm', () => {
  let component: PickForm;
  let fixture: ComponentFixture<PickForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PickForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
