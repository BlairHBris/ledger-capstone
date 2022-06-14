import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../Stock'

type StocksResponse = {
  stocks: Stock[]
}

@Injectable({
  providedIn: 'root'
})

export class StocksService {

  apiKey = 'API_KEY2bHQJYIDNLY33ESMNJO7XI7OXJZX1VUR'

  constructor(private httpClient: HttpClient) {}

  public getStocks() {
    return this.httpClient.get<StocksResponse>(`https://api.finage.co.uk/last/stocks/?symbols=SPY,FB,AMZN,AAPL,NFLX,GOOG&apikey=${this.apiKey}`)
  }

  public getdetailedStock(stock: string) {
    return this.httpClient.get<StocksResponse>(`https://api.finage.co.uk/last/stock/changes/${stock}?apikey=${this.apiKey}`)
  }
}