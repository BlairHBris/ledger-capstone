import { Component, OnInit } from '@angular/core';
import { TRANSACTIONS } from 'src/app/mock-transactions';
import { Transaction } from 'src/app/Transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[] = TRANSACTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
