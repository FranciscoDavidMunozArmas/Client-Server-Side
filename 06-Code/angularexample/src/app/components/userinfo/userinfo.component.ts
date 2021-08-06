import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  
  @Input() user: User;
  @Output() closeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  closeInfo(){
    this.closeEvent?.emit();
  }

}
