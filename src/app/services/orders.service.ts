import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _http:HttpClient) { 
  }


/**
 * 
 * placeOrder: place an order made by a user
 */

public placeOrder(order:Order):Observable<any>  {
  const headers = {'content-type':'application/json'}
  return this._http.post('https://rt-order-validation.herokuapp.com/validate',order,{headers:headers});
}
/** 
  * return all client's orders from an API
  */
  public getAllOrders():Order[]{
    return [];
  }
}
