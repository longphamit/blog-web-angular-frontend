import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder){}
  loginForm=this.fb.group({
    email:['',Validators.required],
    password:['']
  })
 
  ngOnInit(): void {
  }
  onSubmit(){
    console.warn(this.loginForm.value)
  }

}
