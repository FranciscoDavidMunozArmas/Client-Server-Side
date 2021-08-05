import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/interfaces/Appointment';
import { AppointmentService } from 'src/app/services/appointmentservice/appointment.service';
import { ServiceService } from 'src/app/services/serviceservice/service.service';

@Component({
  selector: 'app-buttons-appointment',
  templateUrl: './buttons-appointment.component.html',
  styleUrls: ['./buttons-appointment.component.css']
})
export class ButtonsAppointmentComponent implements OnInit {

  @Input() appointment: Appointment;
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() editEvent = new EventEmitter<any>();
  constructor(private modalService: NgbModal, private appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }

  deleteItem(){
    this.appointmentService.deleteByID(this.appointment.APPOINTMENTCODE)
    .subscribe(() => {
      this.deleteEvent.emit(this.appointment.APPOINTMENTCODE);
      this.modalClose();
    });
  }

  editItem(){
    this.editEvent.emit(this.appointment);
    this.modalClose();
  }

  triggerModal(content:any){
    this.modalService.open(content).result;
  }

  modalClose(){
    this.modalService.dismissAll();
  }

}