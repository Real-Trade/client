import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http:HttpClient) { }

  //call java(springboot rest) endpoint from here
  public loginUser(user:User): Observable<any>{
    const headers = {'content-type':'application/json'}
    const body=JSON.stringify(user);
    // return this._http.post<any>("http://localhost:8080/client/login",body,{'headers':headers})
    return this._http.post<any>("https://rt-client-connectivity.herokuapp.com/client/login",body,{'headers':headers})
  }


  //call java(springboot rest) endpoint from here
  public registerUser(user:User){
    const headers = {'content-type':'application/json'}
    const body=JSON.stringify(user);
    // return this._http.post<any>("http://localhost:8080/client/register",body,{'headers':headers})
    return this._http.post<any>("https://rt-client-connectivity.herokuapp.com/client/register",body,{'headers':headers})
  }
}
