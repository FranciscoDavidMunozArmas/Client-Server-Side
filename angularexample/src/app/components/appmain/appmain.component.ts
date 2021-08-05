import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppointmentService } from 'src/app/services/appointmentservice/appointment.service';
import { UserService } from 'src/app/services/userservice/user.service';
import { User } from 'src/app/interfaces/User';
import { Appointment } from 'src/app/interfaces/Appointment';


@Component({
  selector: 'app-appmain',
  templateUrl: './appmain.component.html',
  styleUrls: ['./appmain.component.css']
})
export class AppmainComponent implements OnInit {
  message: string = "";
  closeModal: string = "";

  appointmentDays: Date[];
  appointments: Appointment[];
  todayAppointments: Appointment[];
  user: User;

  @ViewChild("createModal") createModal: ElementRef;
  @ViewChild("userModal") userModal: ElementRef;
  @ViewChild("exampleModal") exampleModal: ElementRef;

  private cookieName: string = "logged-user";

  constructor(private modalService: NgbModal, private router: Router, private cookie: CookieService, private appointmentService: AppointmentService, private userService: UserService) { }

  ngOnInit(): void {
    const cookieValue = this.cookie.get(this.cookieName);
    if (!cookieValue) {
      this.router.navigate(['/login']);
    }

    this.setAppointments(cookieValue);
    this.setUser(cookieValue);

  }

  setUser(id: string) {
    this.userService.getById(id)
      .subscribe(
        res => {
          this.user = res[0];
        }
      );
  }

  setAppointments(id: string) {
    this.appointmentService.getAllByUser(id)
      .subscribe(
        res => {
          this.appointmentDays = res.map((element: any) => new Date(element.APPOINTMENTDAYHOUR));
          this.appointments = res;
        }
      );
  }

  removeAppointment(id: string) {
    console.log(this.appointments);
    this.appointments = this.appointments.filter((element: Appointment) => element.APPOINTMENTCODE !== id);
    console.log(this.appointments);
  }

  editAppointment(appointment: Appointment) {
    this.appointments = this.appointments.filter((element: Appointment) => {
      if (element.APPOINTMENTCODE === appointment.APPOINTMENTCODE) {
        element = appointment;
      }
      return element;
    });
  }

  clickAdd() {
    this.triggerModal(this.createModal);
  }

  clickUser() {
    this.triggerModal(this.userModal);
  }

  clickSignOut() {
    this.cookie.delete(this.cookieName);
    this.router.navigate(['/login']);
  }

  triggerModal(content: any) {
    this.modalService.open(content).result;
  }

  modalClose() {
    this.modalService.dismissAll();
  }

}
