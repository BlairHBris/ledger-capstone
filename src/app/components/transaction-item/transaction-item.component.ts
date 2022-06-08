import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})

export class TransactionItemComponent implements OnInit {

  @Input() transaction: Transaction | undefined

  @Output() deleteTransaction: EventEmitter<Transaction> = new EventEmitter()

  constructor() { }
  
  ngOnInit(): void {
  }

  faTimes = faTimes;

  delete(transaction: any) {
    this.deleteTransaction.emit(transaction)
  }

}
