import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendarcontainer',
  templateUrl: './calendarcontainer.component.html',
  styleUrls: ['./calendarcontainer.component.css']
})
export class CalendarcontainerComponent implements OnInit {

  constructor() { }

  appointments:Date[] = [];

  ngOnInit(): void {

    this.appointments.push(new Date(2021, 8, 4));
    this.appointments.push(new Date(2021, 8, 20));
    this.appointments.push(new Date(2021, 1, 4));
    this.appointments.push(new Date(2021, 6, 4));
    this.appointments.push(new Date(2021, 8, 23));
    this.appointments.push(new Date(2021, 8, 4));
    this.appointments.push(new Date(2021, 8, 3));

  }

}
