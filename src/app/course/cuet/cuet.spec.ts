import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuet } from './cuet';

describe('Cuet', () => {
  let component: Cuet;
  let fixture: ComponentFixture<Cuet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cuet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
