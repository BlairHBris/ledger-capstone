import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { TransactionService} from '../../services/transaction.service';

@Component({
  selector: 'app-table-heading',
  templateUrl: './table-heading.component.html',
  styleUrls: ['./table-heading.component.css']
})
export class TableHeadingComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
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
