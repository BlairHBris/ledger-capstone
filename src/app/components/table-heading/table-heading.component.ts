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

}
