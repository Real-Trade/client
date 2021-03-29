import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
order: Order = new Order();
  constructor(private _service:OrdersService) { }

  ngOnInit(): void {
  }

  /**
   * placeOrder
   */
  public placeOrder() {
    console.log(this.order.product+" "+this.order.price+" "+this.order.side);
    this._service.placeOrder(this.order).subscribe(
      data=>{console.log("order placed")},
      error=>{console.log("error order could not be placed")}
    )
   
  }
}
