import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { AccountService } from '../services/account.service';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user:User = new User();
errorMessage='';


  constructor(private _service:AccountService, private _route: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
this._service.loginUser(this.user).subscribe(
  data=>{
    localStorage.setItem('userData',JSON.stringify(data))
    console.log("response recieved");
  this._route.navigate(['dashboard']);
  },
  error=>{
    console.log("exception occured")
    console.log(error.error.message)  
this.errorMessage = "Enter login details again";  
//this._route.navigate(['/dashboard']);//TODO:remove this
})
  }

}
