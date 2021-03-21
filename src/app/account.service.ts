import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
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
    return this._http.post<any>("http://localhost:8080/client/login",body,{'headers':headers})
  }
}
