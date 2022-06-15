import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(response => this.transactions = response.transactions.sort((a, b) => {
      const da = new Date(a.date)
      const db = new Date(b.date)
      return da.getTime() - db.getTime()
    }))
  }

  deleteTransaction(transaction: Transaction) {
    this.transactionService.deleteTransaction(transaction)
      .subscribe(() => this.transactions = this.transactions.filter(t => t.id !== transaction.id))
  }

  addTransaction(transaction: Transaction) {
    this.transactionService.addTransaction(transaction).subscribe(response => {
      this.transactions = [...this.transactions, response.transaction].sort((a, b) => {
        const da = new Date(a.date)
        const db = new Date(b.date)
        return da.getTime() - db.getTime()
      })
    })
  }

  updateTransaction(updatedTransaction: Transaction, transaction: Transaction) {
    this.transactionService.updateTransaction(updatedTransaction, transaction).subscribe()
  }
}