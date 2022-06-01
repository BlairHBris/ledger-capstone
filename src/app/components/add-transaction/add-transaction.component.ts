import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transaction } from 'src/app/Transaction';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  @Output() addTransaction: EventEmitter<Transaction> = new EventEmitter()
  
  date: string | undefined
  text: string | undefined
  amount: number | undefined
  credit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    if(!this.date) {
      alert('Please add a transaction date')
      return
    }
    if(!this.text) {
      alert('Please add a transaction description')
      return
    }

    if(!this.amount) {
      alert('Please add a transaction amount')
      return
    }

    const newTransaction = {
      date: this.date,
      description: this.text,
      amount: this.amount,
      credit: this.credit
    }

    this.addTransaction.emit(newTransaction)

    this.date = ''
    this.text = ''
    this.amount = 0
    this.credit = false
  }

}
