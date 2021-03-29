
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders: Order[]|undefined;
  constructor(private _service:OrdersService, private route:Router) { }

  ngOnInit(): void {
this.orders = this._service.getAllOrders();
  }

  /**
   * openOderForm : To open forms to be sibmitted as an order
   */
  public openOderForm() {
    this.route.navigate(['place-order']);
  }
}
