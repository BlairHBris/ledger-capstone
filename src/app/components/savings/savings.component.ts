import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { TransactionService} from '../../services/transaction.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  transactions: Transaction[] = [];

  headers = ["Date", "Account", "Description", "Amount"]

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(response => this.transactions = response.transactions.filter(t => t.account=='Savings').sort((a, b) => {
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
}
