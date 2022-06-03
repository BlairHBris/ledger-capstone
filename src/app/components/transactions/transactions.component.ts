import { Component, OnInit } from '@angular/core';
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
    this.transactionService.getTransactions().subscribe(response => this.transactions = response.transactions)
  }

  deleteTransaction(transaction: Transaction) {
    this.transactionService.deleteTransaction(transaction)
    .subscribe(() => this.transactions = this.transactions.filter(t => t.id !== transaction.id))
  }

  addTransaction(transaction: Transaction) {
    this.transactionService.addTransaction(transaction).subscribe((transaction) => this.transactions.push(transaction))
  }
}