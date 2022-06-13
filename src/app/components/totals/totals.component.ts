import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { TransactionService} from '../../services/transaction.service';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {

  checkingTransactions: Transaction[] = [];
  creditTransactions: Transaction[] = [];
  investmentTransactions: Transaction[] = [];
  savingsTransactions: Transaction[] = [];

  checkingTotal: number = 0
  creditTotal: number = 0
  investmentTotal: number = 0
  savingsTotal: number = 0
  total: number = 0

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(response => {
      this.checkingTransactions = response.transactions.filter(t => t.account=='Checking')
      this.checkingTransactions.forEach((transaction) => {
        this.checkingTotal += transaction.amount
      })
      this.creditTransactions = response.transactions.filter(t => t.account=='Credit Card')
      this.creditTransactions.forEach((transaction) => {
        this.creditTotal += transaction.amount
      })
      this.investmentTransactions = response.transactions.filter(t => t.account=='Investment')
      this.investmentTransactions.forEach((transaction) => {
        this.investmentTotal += transaction.amount
      })
      this.savingsTransactions = response.transactions.filter(t => t.account=='Savings')
      this.savingsTransactions.forEach((transaction) => {
        this.savingsTotal += transaction.amount
      })
      this.total = this.checkingTotal + this.creditTotal + this.investmentTotal + this.savingsTotal
    })
  }
}