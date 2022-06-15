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
    const entry = prompt("Type 'Yes' to confirm deletion, this cannot be undone.")
    if (entry === 'Yes') {
      this.deleteTransaction.emit(transaction)
    }
    else {
      alert('Deletion failed. Please try again.')
    }
  }

  updateEntry(transaction: any) {
    let entry = prompt('Please enter updated date in YYYY-MM-DD format')
    if (entry) {
      this.date = entry
      entry = prompt('Please enter updated account')
      if (entry && entry == 'Checking' || entry == 'Credit Card' || entry == 'Investment' || entry == 'Savings' ) {
        this.account = entry
        entry = prompt('Please enter updated description')
        if (entry) {
          this.text = entry
          entry = prompt('Please enter updated amount')
          if (entry) {
            this.amount = Number(entry)
            if (this.amount > 0) {
              this.credit = true
            } else {
              this.credit = false
            }
          }
        }
      } else {
        alert('Invalid Account name. Please try again.')
      }
    }
    if (this.date && this.account && this.text && this.amount && this.credit) {
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
