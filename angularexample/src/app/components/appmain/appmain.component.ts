import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appmain',
  templateUrl: './appmain.component.html',
  styleUrls: ['./appmain.component.css']
})
export class AppmainComponent implements OnInit {

  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  clickAdd(){
    this.message = "User added";
  }

  clickSignOut(){
    this.message = "Signing out";
  }

}
