import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Appointment } from 'src/app/interfaces/Appointment';
import { Employee } from 'src/app/interfaces/Employee';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Service } from 'src/app/interfaces/Service';
import { ServiceService } from 'src/app/services/services/service.service';
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

  services: Service[] = [];
  employees: Employee[] = [];
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
    this.setServices();
    this.setEmployees();
    this.setInput();
  }

  setInput() {
    if (this.appointment) {
      this.input.servicecode = this.appointment._id;
      this.input.date = new Date(this.appointment.date);
    }
  }

  setServices() {
    /*this.serviceService.getServices()
      .subscribe(
        res => {
          this.services = res;
        }
      );*/
    this.services = this.serviceService.getServices();
  }

  setEmployees() {
    /*this.employeeService.getEmployees()
      .subscribe(
        res => {
          this.employees = res;
        }
      );*/
    this.employees = this.employeeService.getEmployees();
  }

  onChange(e: any) {
    this.input = { ... this.input, [e.target.name]: e.target.value };
    console.log(this.input);
  }

  submitForm(e: any) {
    e.preventDefault();
    this.saveAppointment();
    this.closeForm();
  }

  saveAppointment() {
    const userID = this.cookie.get(this.cookieName);
    if (!this.appointment) {
      this.appointmentService.postAppointment(userID, this.appointment)
        .subscribe(
          () => {
            this.saveEvent.emit(this.appointment);
          }
        );
    } else {
      this.appointmentService.putAppointment(userID, this.appointment._id as string, this.appointment)
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
