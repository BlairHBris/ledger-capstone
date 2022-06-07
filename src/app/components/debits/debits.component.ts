import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { TransactionService} from '../../services/transaction.service';

@Component({
  selector: 'app-debits',
  templateUrl: './debits.component.html',
  styleUrls: ['./debits.component.css']
})
export class DebitsComponent implements OnInit {

  transactions: Transaction[] = [];

  headers = ["Date", "Account", "Description", "Amount"]

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(response => this.transactions = response.transactions.filter(t => t.credit==false))
  }

  deleteTransaction(transaction: Transaction) {
    this.transactionService.deleteTransaction(transaction)
    .subscribe(() => this.transactions = this.transactions.filter(t => t.id !== transaction.id))
  }

  addTransaction(transaction: Transaction) {
    this.transactionService.addTransaction(transaction).subscribe(response => {
      this.transactions = [...this.transactions, response.transaction].filter(transaction => transaction.credit == false)
    })
  }
}
