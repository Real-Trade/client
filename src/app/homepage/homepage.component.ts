import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  router: Router;
  constructor(private _router: Router) { 
    this.router = _router;
    console.log(this.router);
  }

  ngOnInit(): void {
  }

}
