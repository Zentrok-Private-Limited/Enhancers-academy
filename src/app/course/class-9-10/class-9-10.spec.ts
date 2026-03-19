import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class910 } from './class-9-10';

describe('Class910', () => {
  let component: Class910;
  let fixture: ComponentFixture<Class910>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class910]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class910);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
