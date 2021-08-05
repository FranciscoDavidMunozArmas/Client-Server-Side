import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-appointment',
  templateUrl: './delete-appointment.component.html',
  styleUrls: ['./delete-appointment.component.css']
})
export class DeleteAppointmentComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  agree(){
    this.closeEvent.emit();
  }

  disagree(){
    this.closeEvent.emit();
  }

  closeForm(){
    this.closeEvent.emit();
  }

}
