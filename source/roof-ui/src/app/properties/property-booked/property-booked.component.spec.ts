import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBookedComponent } from './property-booked.component';

describe('PropertyBookedComponent', () => {
  let component: PropertyBookedComponent;
  let fixture: ComponentFixture<PropertyBookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
