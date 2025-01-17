import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHolidayComponent } from './update-holiday.component';

describe('UpdateHolidayComponent', () => {
  let component: UpdateHolidayComponent;
  let fixture: ComponentFixture<UpdateHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateHolidayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
