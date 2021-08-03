import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from "moment";
import { Day } from '../../interfaces/Day';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input() appointments?: Date[];

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
  todayDate: number = 0;

  constructor() {}

  ngOnInit(){
    let date = new Date();
    this.todayDate = date.getUTCDate();
    this.getDaysFromDate(date.getUTCMonth() + 1, date.getUTCFullYear());
  }

  getDaysFromDate(month: number, year: number){
    const startDay = moment(`${year}/${month}/01`);
    const endDay = startDay.clone().endOf('month');

    this.dateSelect = startDay;
    const diffDays = endDay.diff(startDay, "days", true);

    const numberOfDays = Math.round(diffDays);
    
    const arrayOfDays = Object.keys([... Array(numberOfDays)]).map((element: any) => {
      element = parseInt(element) + 1;
      const dayObject = moment(`${year}-${month}-${element}`);
      const day:Day = {
        name: dayObject.format('dddd'),
        value: element,
        indexWeek: dayObject.isoWeekday()
      }
      if(this.checkAppointment(element, month, year)){
        day.appointment = true;
      }

      return day;
    });
    this.monthSelect = arrayOfDays;
  }

  checkAppointment(day: number, month:number, year:number):boolean{
    if(this.appointments){
      let actualAppointments = this.appointments.filter((element:Date) => element.getUTCDate() === day && element.getUTCMonth() === month && element.getUTCFullYear() === year);
      return (actualAppointments.length !== 0);
    }
    return false;
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
