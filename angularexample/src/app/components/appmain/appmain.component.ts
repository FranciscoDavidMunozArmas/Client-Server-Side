import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private modalService: NgbModal, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  clickAdd(){
    this.triggerModal(this.createModal);
  }

  clickUser(){
    this.triggerModal(this.userModal);
  }

  clickSignOut(){
    this.triggerModal(this.exampleModal);
  }

  triggerModal(content:any){
    this.modalService.open(content).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
