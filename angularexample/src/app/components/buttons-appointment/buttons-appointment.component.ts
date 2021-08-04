import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buttons-appointment',
  templateUrl: './buttons-appointment.component.html',
  styleUrls: ['./buttons-appointment.component.css']
})
export class ButtonsAppointmentComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  triggerModal(content:any){
    
  }

  modalClose(){
    this.modalService.dismissAll();
  }

}
