import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 

  constructor(private _http:HttpClient) {}
  
   public getBalance(): Observable<any>{
         let userData = localStorage.getItem('userData');
        return this._http.get('https://rt-reporting.herokuapp.com/account/client/'+JSON.parse(userData).clientId);
  }

  public getPortfolioNumber(): string {
    return 'zelo';
  }
  public getOrderNumber():Observable<any>{
    let userData = localStorage.getItem('userData');
    return this._http.get('https://rt-reporting.herokuapp.com/order/client/'+JSON.parse(userData).clientId);

    
  }
  
}
