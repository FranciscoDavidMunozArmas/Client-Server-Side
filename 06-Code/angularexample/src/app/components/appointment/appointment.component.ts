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
    servicecode: "",
    employeecode: "",
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
    this.serviceService.getServices()
    .subscribe(res => {
       this.services = res;
    });
  }

  setEmployees() {
    /*this.employeeService.getEmployees()
      .subscribe(
        res => {
          this.employees = res;
        }
      );*/
     this.employeeService.getEmployees()
     .subscribe(res => {
        this.employees = res
     });
  }

  onChange(e: any) {
    this.input = { ... this.input, [e.target.name]: e.target.value };
  }

  submitForm(e: any) {
    e.preventDefault();
    this.saveAppointment();
    this.closeForm();
  }

  saveAppointment() {
    const userID = this.cookie.get(this.cookieName);
    if (!this.appointment) {
      this.appointment = {
        service: this.services.find((element: Service) => element._id === this.input.servicecode) as Service,
        employee: this.employees.find((element: Employee) => element._id === this.input.employeecode) as Employee,
        date: this.input.date
      }
      this.appointmentService.postAppointment(userID, this.appointment)
        .subscribe(
          (res: any) => {
            this.appointment = res.appointments[res.appointments.length - 1];
            console.log(this.appointment);
            this.saveEvent.emit(this.appointment);
          }
        );
    } else {
      const auxAppointment:Appointment = {
        _id: this.appointment._id,
        service: this.services.find((element: Service) => element._id === this.input.servicecode) as Service,
        employee: this.employees.find((element: Employee) => element._id === this.input.employeecode) as Employee,
        date: this.input.date
      }
      this.appointmentService.putAppointment(userID, this.appointment._id as string, auxAppointment)
        .subscribe(
          res => {
            this.appointment = res.find((element: Appointment) => element._id === this.appointment._id) as Appointment;
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
