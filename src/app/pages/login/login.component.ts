import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }
  checkLogin=()=>{
    console.log("login")
    alert("login")
  }

}