import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendarcontainer',
  templateUrl: './calendarcontainer.component.html',
  styleUrls: ['./calendarcontainer.component.css']
})
export class CalendarcontainerComponent implements OnInit {

  @Input() appointments: Date[];
  @Output() dateEvent = new EventEmitter<Date>();
  constructor() { }

  ngOnInit(): void {

  }

  sendParent(date: Date) {
    this.dateEvent.emit(date);
  }

}
