import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppointmentService } from 'src/app/services/appointmentservice/appointment.service';
import { UserService } from 'src/app/services/userservice/user.service';
import { User } from 'src/app/interfaces/User';


@Component({
  selector: 'app-appmain',
  templateUrl: './appmain.component.html',
  styleUrls: ['./appmain.component.css']
})
export class AppmainComponent implements OnInit {
  message: string = "";
  closeModal: string = "";

  appointments: Date[];
  user: User;

  @ViewChild("createModal") createModal: ElementRef;
  @ViewChild("userModal") userModal: ElementRef;
  @ViewChild("exampleModal") exampleModal: ElementRef;

  private cookieName:string = "logged-user";

  constructor(private modalService: NgbModal, private router: Router, private cookie:CookieService, private appointmentService: AppointmentService, private userService: UserService) { }

  ngOnInit(): void {
    const cookieValue = this.cookie.get(this.cookieName);
    if(!cookieValue){
      this.router.navigate(['/login']);
    }

    this.getAppointments(cookieValue);
    this.getUser(cookieValue);

  }

  getUser(id: string){
    this.userService.getById(id)
    .subscribe(
      res => {
        this.user = res[0];      }
    );
  }

  getAppointments(id: string){
    this.appointmentService.getAllByUser(id)
    .subscribe(
      res => {
        this.appointments = res.map((element: any) => new Date(element.APPOINTMENTDAYHOUR));
      }
    )
  }

  clickAdd(){
    this.triggerModal(this.createModal);
  }

  clickUser(){
    this.triggerModal(this.userModal);
  }

  clickSignOut(){
    this.cookie.delete(this.cookieName);
    this.router.navigate(['/login']);
  }

  triggerModal(content:any){
    this.modalService.open(content).result;
  }

  modalClose(){
    this.modalService.dismissAll();
  }

}
