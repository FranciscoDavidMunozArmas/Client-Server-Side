import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendarcontainer',
  templateUrl: './calendarcontainer.component.html',
  styleUrls: ['./calendarcontainer.component.css']
})
export class CalendarcontainerComponent implements OnInit {

  constructor() { }

  appointment:Date[] = [];

  example: string = "";

  ngOnInit(): void {

    this.appointment.push(new Date(2021, 8, 4));
    this.appointment.push(new Date(2021, 7, 1));
    this.appointment.push(new Date(2021, 6, 4));
    this.appointment.push(new Date(2021, 8, 20));
    this.appointment.push(new Date(2021, 1, 4));
    this.appointment.push(new Date(2021, 6, 4));
    this.appointment.push(new Date(2021, 8, 23));
    this.appointment.push(new Date(2021, 8, 4));
    this.appointment.push(new Date(2021, 5, 4));
    this.appointment.push(new Date(2021, 4, 4));
    this.appointment.push(new Date(2021, 3, 4));
    this.appointment.push(new Date(2021, 1, 3));
    this.appointment.push(new Date(2021, 2, 3));

  }

  setExample(example: string) {
    console.log(example);
    this.example = example;
  }

}
