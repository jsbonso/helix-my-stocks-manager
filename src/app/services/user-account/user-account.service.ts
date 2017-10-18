import { Injectable } from '@angular/core';

/**
 * User Account Service which contains the client's
 * remaining cash balance.
 * @author: Jon Bonso
 */
@Injectable()
export class UserAccountService {

  private accountBalance: number;
  public listOfStocks: string[] = [];

  constructor() {
    this.accountBalance = 10000;
  }

  /**
   * Updates the account balance
   * @param {number} amount
   */
  updateBalance( amount: number) {
    this.accountBalance = amount;
  }

  /**
   * Gets the user's current balance
   * @returns {number}
   */
  getBalance() {
    return this.accountBalance;
  }


  addUserStocks(stock) {
    this.listOfStocks.push(stock);
  }

}
