import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StocksService {

  apiKey = 'API_KEY2bHQJYIDNLY33ESMNJO7XI7OXJZX1VUR'

  constructor(private httpClient: HttpClient) {}

  public getStocks() {
    return this.httpClient.get(`https://api.finage.co.uk/last/stocks/?symbols=AAPL,TSLA,GOGL&apikey=${this.apiKey}`)
  }
}