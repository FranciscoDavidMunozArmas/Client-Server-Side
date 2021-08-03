import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  week: any = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  monthSelect: any = [];
  dateSelect: any = [];

  constructor() {}

  ngOnInit(){
    let date = new Date();
    this.getDaysFromDate(date.getMonth() + 2, date.getFullYear());
  }

  getDaysFromDate(month: number, year: number){
    const startDay = moment.utc(`${year}/${month}/01`);
    const endDay = startDay.clone().endOf('month');

    this.dateSelect = startDay;
    const diffDays = endDay.diff(startDay, "days", true);

    const numberOfDays = Math.round(diffDays);
    
    const arrayOfDays = Object.keys([... Array(numberOfDays)]).map((element: any) => {
      element = parseInt(element) + 1;
      const dayObject = moment(`${year}-${month}-${element}`);
      return {
        name: dayObject.format('dddd'),
        value: element,
        indexWeek: dayObject.isoWeekday()
      }
    });
    this.monthSelect = arrayOfDays;
  }

  changeMonth(flag: number){
    if(flag < 0){
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format('MM'), prevDate.format('YYYY'));
    } else if (flag > 0){
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format('MM'), nextDate.format('YYYY'));
    } else {
      let date = new Date();
      this.getDaysFromDate(date.getMonth() + 2, date.getFullYear());
    }
  }

  clickDay(day:any){
    const monthYear = this.dateSelect.format('YYYY-MM');
    const parse = `${monthYear}-${day.value}/01`;
    const objectDate = moment(parse);
  }

}
