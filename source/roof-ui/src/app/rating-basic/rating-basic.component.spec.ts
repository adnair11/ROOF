import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBasicComponent } from './rating-basic.component';

describe('RatingBasicComponent', () => {
  let component: RatingBasicComponent;
  let fixture: ComponentFixture<RatingBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
