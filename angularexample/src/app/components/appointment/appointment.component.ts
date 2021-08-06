import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Appointment } from 'src/app/interfaces/Appointment';
import { Employee } from 'src/app/interfaces/Employee';
import { AppointmentService } from 'src/app/services/appointmentservice/appointment.service';
import { EmployeeService } from 'src/app/services/employeeservice/employee.service';
import { Service } from 'src/app/interfaces/Service';
import { ServiceService } from 'src/app/services/serviceservice/service.service';
import { v4 } from "uuid";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  @Input() appointment: Appointment;
  @Output() closeEvent = new EventEmitter<any>();
  @Output() saveEvent = new EventEmitter<any>();

  services: Service[];
  employees: Employee[];
  input: any = {
    date: new Date(),
    servicecode: ""
  };

  private cookieName: string = "logged-user";

  constructor(private serviceService: ServiceService,
    private employeeService: EmployeeService,
    private appointmentService: AppointmentService,
    private cookie: CookieService) { }

  ngOnInit(): void {
    this.setEmployees();
    this.setServices();
    if(this.appointment){
      this.input.servicecode = this.appointment.SERVICECODE;
      this.input.date = new Date(this.appointment.APPOINTMENTDAYHOUR);
    } else {
      this.input.servicecode = this.services[0].SERVICECODE;
    }
  }

  setServices() {
    this.serviceService.getAll()
      .subscribe(
        res => {
          this.services = res;
        }
      );
  }

  setEmployees() {
    this.employeeService.getAll()
      .subscribe(
        res => {
          this.employees = res;
        }
      );
  }

  onChange(e: any) {
    this.input = { ... this.input, [e.target.name]: e.target.value };
  }

  submitForm(e: any) {
    e.preventDefault();
    this.saveAppointment();
    this.closeForm();
  }

  saveAppointment(){
    if (!this.appointment) {
      const userID = this.cookie.get(this.cookieName);
      this.appointment = { 
        APPOINTMENTCODE: v4(),
        SERVICECODE: this.input.servicecode,
        USERCODE: userID,
        APPOINTMENTDAYHOUR: this.input.date
      }
      this.appointmentService.post(this.appointment)
      .subscribe(
        () => {
          this.saveEvent.emit(this.appointment);
        }
      );
    } else {
      this.appointment = {... this.appointment, SERVICECODE: this.input.servicecode}
      this.appointment = {... this.appointment, APPOINTMENTDAYHOUR: this.input.date}
      this.appointmentService.put(this.appointment.APPOINTMENTCODE, this.appointment)
      .subscribe(
        () => {
          this.saveEvent.emit(this.appointment);
        }
      );
    }
  }

  cancelForm() {
    this.closeForm();
  }

  closeForm() {
    this.closeEvent.emit();
  }

}
