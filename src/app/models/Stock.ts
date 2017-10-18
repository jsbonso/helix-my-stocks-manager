/**
 * Stock Model
 */
export class Stock {

  ticker: string;
  isMarginable: boolean;
  stockName: string;
  stockPrice: number;

  constructor (ticker: string, stockPrice: number, stockName: string, isMarginable?: boolean) {
    this.ticker = ticker;
    this.isMarginable = isMarginable || false;
    this.stockName = stockName;
    this.stockPrice = stockPrice;
  }
}
