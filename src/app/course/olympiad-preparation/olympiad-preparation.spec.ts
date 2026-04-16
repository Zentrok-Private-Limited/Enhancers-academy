import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympiadPreparation } from './olympiad-preparation';

describe('OlympiadPreparation', () => {
  let component: OlympiadPreparation;
  let fixture: ComponentFixture<OlympiadPreparation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlympiadPreparation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlympiadPreparation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
