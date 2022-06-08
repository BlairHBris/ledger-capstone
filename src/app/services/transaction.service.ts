import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../Transaction';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}

type TransactionsResponse = {
  transactions: Transaction[]
}

type TransactionResponse = {
  transaction: Transaction
}

@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  private apiUrl = 'https://ledger-capstone-api.herokuapp.com/transactions'

  constructor(private http: HttpClient) {}

  getTransactions() {
    return this.http.get<TransactionsResponse>(this.apiUrl)
  }

  deleteTransaction(transaction: Transaction): Observable<Transaction> {
    const url = `${this.apiUrl}/${transaction.id}`
    return this.http.delete<Transaction>(url)
  }

  addTransaction(transaction: Transaction) {
    return this.http.post<TransactionResponse>(this.apiUrl, transaction, httpOptions)
  }
}
