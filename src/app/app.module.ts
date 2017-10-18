import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {JsonpModule, Jsonp, Response} from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CashAccountComponent } from './cash-account/cash-account.component';

import {UserAccountService} from './services/user-account/user-account.service';
import { StockHoldingsComponent } from './stock-holdings/stock-holdings.component';
import { StockOrderComponent } from './stock-order/stock-order.component';
import { StockServiceService } from './services/stock-service/stock-service.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CashAccountComponent,
    StockHoldingsComponent,
    StockOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [UserAccountService, StockServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
