import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { StockServiceService } from '../services/stock-service/stock-service.service';
import { UserAccountService } from '../services/user-account/user-account.service';

@Component({
  selector: 'app-stock-order',
  templateUrl: './stock-order.component.html',
  styleUrls: ['./stock-order.component.css']
})
export class StockOrderComponent implements OnInit {

  public selectedStock: any;
  public numberOfShares: number;
  public brokerFeeAmount: number;
  public totalAmount: number;
  public brokerFee = 2.5;
  public stocks = this.userAccount.listOfStocks;

  /**
   * constructor method for StockOrder Component
   * @param {StockServiceService} _stockService
   */
  constructor(private _stockService: StockServiceService, private userAccount: UserAccountService) {

  }


  ngOnInit() {

  }


  public addStock(stock){
    this.userAccount.addUserStocks(stock);

  }
  public computeTotalAmount () {
    console.log('compute');
    this.totalAmount = this.numberOfShares * this.selectedStock.last_price;
    this.brokerFeeAmount = this.selectedStock.last_price * this.numberOfShares * this.brokerFee;

  }
  /**
   *
   * @param {string} stockTicker
   */
  public getStockData( stockTicker: string, countryCode?: string) {

    this._stockService.fetchStockData(stockTicker)
      .subscribe(
        data => {
          this.selectedStock = data;
        },
        error => console.log('Server Error')
      );
  }


}
