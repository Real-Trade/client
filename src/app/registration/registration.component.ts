import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from '../user';
import { Router, Routes } from '@angular/router';
import { AccountService } from '../account.service';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:User = new User();
  errorMessage="";

  constructor(private _service:AccountService, private _route: Router) { }

  ngOnInit(): void {
  }


  registerUser(){
this._service.registerUser(this.user).subscribe(
  data=>{console.log("response recieved");
this._route.navigate(['dashboard'])
},
  error=>{
    this.errorMessage='email already exists';
  }
)
  }
}
