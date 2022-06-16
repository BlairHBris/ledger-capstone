import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';
import { Stock } from 'src/app/Stock';

@Component({
  selector: 'app-news',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})

export class StocksComponent implements OnInit {

  stocks: Stock[] | undefined

  constructor(private stocksService: StocksService) { }

  ngOnInit(): void {
    this.stocksService.getStocks().subscribe((response: any) => {
      this.stocks = response
    })
  }
}
/*
<div class="stocks">
    <div class="stock">
        <h2>Testing</h2>
        <h2>Stocks</h2>
    </div>
    <div class="stock">
        <h2>Testing</h2>
        <h2>Stocks</h2>
    </div>
    <div class="stock">
        <h2>Testing</h2>
        <h2>Stocks</h2>
    </div>
    <div class="stock">
        <h2>Testing</h2>
        <h2>Stocks</h2>
    </div>
    <div class="stock">
        <h2>Testing</h2>
        <h2>Stocks</h2>
    </div>
    <div class="stock">
        <h2>Testing</h2>
        <h2>Stocks</h2>
    </div>
</div>

    */