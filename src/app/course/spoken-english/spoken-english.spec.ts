import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpokenEnglish } from './spoken-english';

describe('SpokenEnglish', () => {
  let component: SpokenEnglish;
  let fixture: ComponentFixture<SpokenEnglish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpokenEnglish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpokenEnglish);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
