import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../Transaction';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  private apiUrl = 'http://localhost:5000/transactions'

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl)
  }

  getCreditTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl)
  }

  deleteTransaction(transaction: Transaction): Observable<Transaction> {
    const url = `${this.apiUrl}/${transaction.id}`
    return this.http.delete<Transaction>(url)
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl, transaction, httpOptions)
  }
}
