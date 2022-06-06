import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  @Output() addTransaction: EventEmitter<Transaction> = new EventEmitter()
  
  date: string | undefined
  text: string | undefined
  account: string | undefined
  amount: number | undefined
  credit: boolean = false;
  showAddTransaction: boolean = true
  subscription: Subscription

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(boolean => this.showAddTransaction = boolean)
  }

  ngOnInit(): void {
  }

  addNewTransaction(newTransaction: Transaction) {
    if(!this.date) {
      alert('Please add a transaction date')
      return
    }

    if(!this.account) {
      alert('Please add an affected account')
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

    if(this.credit == false && this.amount > 0) {
      alert('A Debit cannot be positive')
      return
    }

    if(this.credit == true && this.amount < 0) {
      alert('A Credit cannot be negative')
      return
    }

    const addedTransaction = {
      date: this.date,
      account: this.account,
      description: this.text,
      amount: this.amount,
      credit: this.credit
    }

    this.addTransaction.emit(addedTransaction)

    this.date = ''
    this.account = ''
    this.text = ''
    this.amount = 0
    this.credit = false
  }
}
