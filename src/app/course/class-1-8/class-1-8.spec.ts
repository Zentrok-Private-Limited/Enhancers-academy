import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class18 } from './class-1-8';

describe('Class18', () => {
  let component: Class18;
  let fixture: ComponentFixture<Class18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class18]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class18);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
