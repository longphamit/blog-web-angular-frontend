import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../admin/model/account';
import { LoginService } from "./service/login.service"
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  txtMessage:string;
  loginFail:boolean;
  constructor(private fb: FormBuilder, private loginService: LoginService,private router: Router) {
    this.txtMessage="";
    this.loginFail=false;
   }
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['']
  })
  get email(): string {

    return this.loginForm.get("email")?.value;
  }
  get password(): string {
    return this.loginForm.get("password")?.value;
  }
  ngOnInit(): void {
  }
  login() {
    console.warn(this.loginForm.value)
    var account: Account = new Account();
    account.email = this.email;
    account.password = this.password;
    this.loginService.login(account).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      if (err.status == 401) {
        this.txtMessage="Email or password invalid"
      }
    });
  }
}
