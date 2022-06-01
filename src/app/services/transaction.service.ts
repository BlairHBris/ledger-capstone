import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../Transaction';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  private apiUrl = 'http://localhost:5000/transactions'

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl)
  }
}
