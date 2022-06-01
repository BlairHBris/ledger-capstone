import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {

  @Input() transaction: Transaction | undefined

  constructor() { }
  
  ngOnInit(): void {
  }

  faTimes = faTimes;

}
