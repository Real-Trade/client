import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  router: Router|undefined;
  balance: string|undefined;
  portfolioNumber: string|undefined;
  orderNumber: string|undefined;


  constructor(private _router: Router, private _service: DashboardService) { 
    this.router = _router;
    console.log(this.router);
  }

  ngOnInit(): void {
this.balance = this._service.getBalance();
this.orderNumber=this._service.getOrderNumber();
this.portfolioNumber=this._service.getPortfolioNumber();
  }

}
