import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Headers, RequestOptions, Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class StockServiceService {

  header: Headers;
  opts: RequestOptions;

  // Base API of the web service that I created.
  stockApiBaseUrl = 'https://helix-stocks-api.herokuapp.com/query?stockTicker=';

  constructor(private _jsonp: Jsonp, private _http: HttpClient) {

    this.header = new Headers();
    this.header.append('Content-Type', 'application/x-www-form-urlencoded');

    // Populate Request Options
    this.opts = new RequestOptions();
    this.opts.headers = this.header;

  }

  /**
   * Fetch Stock Data
   * @param {string} stockTicker
   * @returns {Subscription}
   */
  public fetchStockData(stockTicker: string): Observable<any>  {
    // return this._http.get(this.stockApiBaseUrl + stockTicker);
    return this._http.get(this.stockApiBaseUrl + stockTicker)
      .map( (res: Response) => res )
      .catch((error: any) => Observable.throw(error.error || ' Server Error '));

  }

  /**
   * Alternative way of fetching data using JSONP
   *
   * @param {string} stockTicker
   * @returns {Observable<any>}
   */
  public fetchStockDataViaJSONP(stockTicker: string): Observable<any> {
    const queryURL = `https://www.bloomberg.com/markets/watchlist/recent-ticker/${stockTicker}`;

    return this._jsonp.request(queryURL, this.opts);
  }

}
