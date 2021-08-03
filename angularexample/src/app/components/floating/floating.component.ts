import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-floating',
  templateUrl: './floating.component.html',
  styleUrls: ['./floating.component.css']
})
export class FloatingComponent implements OnInit {

  @Input() icon: string = "fa fa-plus";
  @Output() eventFunction = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickFloating(){
    this.eventFunction.emit();
  }

}