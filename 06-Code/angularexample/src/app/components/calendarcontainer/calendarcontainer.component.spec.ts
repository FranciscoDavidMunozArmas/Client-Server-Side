import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarcontainerComponent } from './calendarcontainer.component';

describe('CalendarcontainerComponent', () => {
  let component: CalendarcontainerComponent;
  let fixture: ComponentFixture<CalendarcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
