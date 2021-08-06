import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/interfaces/Appointment';
import { Service } from 'src/app/interfaces/Service';
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

  service: Service;
  date: string;

  constructor(private modalService: NgbModal, private appointmentService: AppointmentService, private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getById(this.appointment.SERVICECODE)
    .subscribe(
      res => {
        this.service = res[0];
      }
    );
    this.setDate();
  }

  setDate(){
    let auxDate = new Date(this.appointment.APPOINTMENTDAYHOUR);
    auxDate.setMonth(auxDate.getMonth() + 1);
    let hour = (auxDate.getHours() < 10)? "0" + auxDate.getHours().toString():auxDate.getHours().toString();
    let minutes = (auxDate.getMinutes() < 10)? "0" + auxDate.getMinutes().toString():auxDate.getMinutes().toString();
    let date = (auxDate.getDate() < 10)? "0" + auxDate.getDate().toString():auxDate.getDate().toString();
    let month = (auxDate.getMonth() < 10)? "0" + auxDate.getMonth().toString():auxDate.getMonth().toString();
    let year = (auxDate.getFullYear() < 10)? "0" + auxDate.getFullYear().toString():auxDate.getFullYear().toString();

    this.date = `${year}/${month}/${date}  ${hour}:${minutes}`
  }

  deleteItem(){
    this.appointmentService.deleteByID(this.appointment.APPOINTMENTCODE)
    .subscribe(() => {
      this.deleteEvent.emit(this.appointment.APPOINTMENTCODE);
      this.modalClose();
    });
  }

  editItem(appointment: Appointment){
    this.appointment = appointment;
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