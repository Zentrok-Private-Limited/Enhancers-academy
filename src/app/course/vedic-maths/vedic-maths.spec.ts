import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedicMaths } from './vedic-maths';

describe('VedicMaths', () => {
  let component: VedicMaths;
  let fixture: ComponentFixture<VedicMaths>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VedicMaths]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VedicMaths);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
