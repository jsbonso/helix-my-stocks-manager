import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../services/user-account/user-account.service';

@Component({
  selector: 'app-stock-holdings',
  templateUrl: './stock-holdings.component.html',
  styleUrls: ['./stock-holdings.component.css']
})
export class StockHoldingsComponent implements OnInit {

  stocks;

  constructor(private userAccount: UserAccountService) {
    this.stocks = userAccount.listOfStocks;
  }

  ngOnInit() {
  }

}
