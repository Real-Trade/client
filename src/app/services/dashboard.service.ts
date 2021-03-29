import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http:HttpClient) {}


   public getBalance(): string{
    return 'dollars';
    // this._http.get('')
  }
  public getPortfolioNumber(): string{
    return 'zelo';
  }
  public getOrderNumber(): string{
    return 'zelo';
  }
  
}
