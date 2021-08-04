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

  constructor(private modalService: NgbModal) { }

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
    this.modalService.open(content).result;
  }

  modalClose(){
    this.modalService.dismissAll();
  }

}
