import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendarcontainer',
  templateUrl: './calendarcontainer.component.html',
  styleUrls: ['./calendarcontainer.component.css']
})
export class CalendarcontainerComponent implements OnInit {

  @Input() appointments: Date[];
  constructor() { }

  example: string = "";

  ngOnInit(): void {

  }

  setExample(example: string) {
    this.example = example;
  }

}
