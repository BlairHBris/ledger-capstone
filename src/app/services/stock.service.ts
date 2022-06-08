import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Stock } from '../Stock';

type StockResponse = {
  stock: Stock
}

@Injectable({
  providedIn: 'root'
})

export class StockService {

  constructor(private http: HttpClient) {}

  getStock(stockSymbol: string) {
    return this.http.get<StockResponse>(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&interval=5min&apikey=HQKD0NKPBLUU103L`)
  }
}
