import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-appmain',
  templateUrl: './appmain.component.html',
  styleUrls: ['./appmain.component.css']
})
export class AppmainComponent implements OnInit {
  message: string = "";
  closeModal: string = "";

  @ViewChild("createModal") createModal: ElementRef;
  @ViewChild("userModal") userModal: ElementRef;
  @ViewChild("exampleModal") exampleModal: ElementRef;

  private cookieName:string = "logged-user";

  constructor(private modalService: NgbModal, private router: Router, private cookie:CookieService) { }

  ngOnInit(): void {
    const cookieValue = this.cookie.get(this.cookieName);
    if(!cookieValue){
      this.router.navigate(['/login']);
    }
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
