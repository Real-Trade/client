import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private _http:HttpClient) { }
  /**
   * createPortfolio: hit API to create portfolio in db
   */
  public createPortfolio(): Observable<any> {
    return this._http.post("");
  }
}
