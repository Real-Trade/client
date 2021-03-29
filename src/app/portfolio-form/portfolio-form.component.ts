import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../models/portfolio';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})
export class PortfolioFormComponent implements OnInit {
portfolio:Portfolio= new Portfolio();
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * createPortfolio
   */
  public createPortfolio() {
    
  }
}
