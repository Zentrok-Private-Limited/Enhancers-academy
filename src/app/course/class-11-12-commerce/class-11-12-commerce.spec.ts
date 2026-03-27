import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class1112Commerce } from './class-11-12-commerce';

describe('Class1112Commerce', () => {
  let component: Class1112Commerce;
  let fixture: ComponentFixture<Class1112Commerce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class1112Commerce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class1112Commerce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
