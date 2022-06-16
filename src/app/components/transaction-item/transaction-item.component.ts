import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})

export class TransactionItemComponent implements OnInit {

  @Input() transaction: Transaction | undefined

  @Output() deleteTransaction: EventEmitter<Transaction> = new EventEmitter()
  @Output() updateTransaction: EventEmitter<Transaction> = new EventEmitter()

  date: string | undefined
  text: string | undefined
  account: string | undefined
  amount: number | undefined
  credit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  faTimes = faTimes;
  faPencil = faPencil;

  confirmDeletion(transaction: any) {
    const entry = confirm("Are you sure you want to delete this transaction? This cannot be undone.")
    if (entry == true) {
      this.deleteTransaction.emit(transaction)
    }
  }

  updateEntry(transaction: any) {
    let confirmation = confirm('Do you want to update the Date of this transaction?')
    switch (confirmation) {
      case true:
        let entry = prompt('Please enter updated date in YYYY-MM-DD format.')
        if (entry) {
          this.date = entry
        }
        break
      case false:
        this.date = transaction.date
    }
    confirmation = confirm('Do you want to update the Account for this transaction?')
    switch (confirmation) {
      case true:
        let entry = prompt('Please enter updated account.')
        if (entry && entry == 'Checking' || entry == 'Credit Card' || entry == 'Investment' || entry == 'Savings') {
          this.account = entry
        } else {
          alert("Invalid Account entered. Please try again.")
        }
        break
      case false:
        this.account = transaction.account
    }
    confirmation = confirm('Do you want to update the Description for this transaction?')
    switch (confirmation) {
      case true:
        let entry = prompt('Please enter updated description.')
        if (entry) {
          this.text = entry
        }
        break
      case false:
        this.text = transaction.description
    }
    confirmation = confirm('Do you want to update the Amount for this transaction?')
    switch (confirmation) {
      case true:
        let entry = prompt('Please enter updated amount.')
        if (entry) {
          this.amount = Number(entry)
          if (this.amount >= 0) {
            this.credit = true
          } else {
            this.credit = false
          }
        }
        break
      case false:
        this.amount = transaction.amount
        this.credit = transaction.credit
    }
    
    if (this.date && this.account && this.text && this.amount) {
      const updatedTransaction = {
        date: this.date,
        account: this.account,
        description: this.text,
        amount: this.amount,
        credit: this.credit
      }
      this.updateTransaction.emit(updatedTransaction)
    }
  }
}
