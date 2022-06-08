import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { TransactionService} from '../../services/transaction.service';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {

  transactions: Transaction[] = [];

  checkingTotal: number = 0
  creditTotal: number = 0
  investmentTotal: number = 0
  savingsTotal: number = 0
  total: number = 0

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): any {
    this.transactionService.getTransactions().subscribe(response => {
      this.transactions = response.transactions.filter(t => t.account=='Checking')
      this.transactions.forEach((transaction) => {
        this.checkingTotal += transaction.amount
      })
    })
  }
}