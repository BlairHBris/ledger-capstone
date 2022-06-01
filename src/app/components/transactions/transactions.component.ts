import { Component, OnInit } from '@angular/core';
import { TRANSACTIONS } from 'src/app/mock-transactions';
import { Transaction } from 'src/app/Transaction';
import { TransactionService} from '../../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[] = [];

  headers = ["Date", "Description", "Amount"]

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((transactions) => this.transactions = transactions)
  }

}
