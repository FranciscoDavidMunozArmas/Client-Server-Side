import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/User';
import { Appointment } from 'src/app/interfaces/Appointment';
import { faTeeth } from '@fortawesome/free-solid-svg-icons';


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
  user: User;
  showmore: boolean = true;
  todayAppointment: Appointment[];

  @ViewChild("createModal") createModal: ElementRef;
  @ViewChild("userModal") userModal: ElementRef;
  @ViewChild("calendar") calendar: ElementRef;

  private cookieName: string = "logged-user";

  constructor(private modalService: NgbModal, private router: Router, private cookie: CookieService, private appointmentService: AppointmentService, private userService: UserService) { }

  ngOnInit(): void {
    const cookieValue = this.cookie.get(this.cookieName);
    if (!cookieValue) {
      this.router.navigate(['/login']);
    }
    this.getUser(cookieValue);
  }

  getUser(id: string) {
    this.userService.getUser(id)
      .subscribe(
        res => {
          this.user = res;
          this.appointments = this.user.appointments;
          this.setAppointmentDays();
          this.setTodayAppointment(new Date());
        }
      );
  }

  setUser(user: User) {
    this.user = user;
  }

  setAppointmentDays() {
    this.appointmentDays = this.appointments.map((element: Appointment) => new Date(element.date));
  }

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
    this.setAppointmentDays();
  }

  removeAppointment(id: string) {
    this.appointments = this.appointments.filter((element: Appointment) => element._id !== id);
    this.setAppointmentDays();
  }

  editAppointment(appointment: Appointment) {
    this.appointments = this.appointments.filter((element: Appointment) => {
      if (element._id === appointment._id) {
        element = appointment;
      }
      return element;
    });
    this.setAppointmentDays();
  }

  setTodayAppointment(date: Date) {
    this.todayAppointment = [];
    this.appointments.forEach((element: Appointment) => {
      const elementDate = new Date(element.date);
      if (elementDate.getDate() === date.getDate() && 
      elementDate.getMonth() === date.getMonth() &&
      elementDate.getFullYear() === date.getFullYear()) {
        this.todayAppointment.push(element);
      }
    });
  }

  showMore(){
    this.showmore = !this.showmore;
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
