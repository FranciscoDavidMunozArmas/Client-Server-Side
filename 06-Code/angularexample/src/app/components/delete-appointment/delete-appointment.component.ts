import { Component, EventEmitter, OnInit, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-delete-appointment',
  templateUrl: './delete-appointment.component.html',
  styleUrls: ['./delete-appointment.component.css']
})
export class DeleteAppointmentComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<any>();
  @Output() agreeEvent = new EventEmitter<any>();
  @Output() disagreeEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{

  }

  agree(){
    this.agreeEvent.emit();
  }

  disagree(){
    this.closeEvent.emit();
  }
}
