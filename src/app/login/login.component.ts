import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { AccountService } from '../account.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user:User = new User("fromangular","fromangular","unique@gmail.com","unique");
errorMessage='';


  constructor(private _service:AccountService, private _route: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
this._service.loginUser(this.user).subscribe(
  data=>{console.log("response recieved");
  this._route.navigate(['dashboard']);
  },
  error=>{console.log("exception occured")  
this.errorMessage = "Enter login details again";  
})
  }
}
