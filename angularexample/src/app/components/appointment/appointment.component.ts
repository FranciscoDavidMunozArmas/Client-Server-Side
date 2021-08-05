import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Appointment } from 'src/app/interfaces/Appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    this.closeForm();
  }

  cancelForm(){
    this.closeForm();
  }

  closeForm(){
    this.closeEvent.emit();
  }

}
