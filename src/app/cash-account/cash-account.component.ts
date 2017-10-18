import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../services/user-account/user-account.service';

@Component({
  selector: 'app-cash-account',
  templateUrl: './cash-account.component.html',
  styleUrls: ['./cash-account.component.css']
})
export class CashAccountComponent implements OnInit {

  public currentBalance: number;
  public topUpAmount: number;

  constructor( private userAccount: UserAccountService) {
    this.currentBalance = userAccount.getBalance();
  }

  ngOnInit() {

  }

  /**
   * Add fund
   * @param {number} topUpAmount
   */
  addFund( topUpAmount: number ) {
    if (topUpAmount > 0.1) {
      this.userAccount.updateBalance(this.currentBalance + topUpAmount);
      this.currentBalance = this.userAccount.getBalance();
      this.topUpAmount = null;
    }
  }

}
