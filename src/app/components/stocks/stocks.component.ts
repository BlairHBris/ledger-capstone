import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-news',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})

export class StocksComponent implements OnInit {

  stocks: any

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
        <h3>Testing</h3>
        <h3>Stocks</h3>
    </div>
    <div class="stock">
        <h3>Testing</h3>
        <h3>Stocks</h3>
    </div>
    <div class="stock">
        <h3>Testing</h3>
        <h3>Stocks</h3>
    </div>
    <div class="stock">
        <h3>Testing</h3>
        <h3>Stocks</h3>
    </div>
    <div class="stock">
        <h3>Testing</h3>
        <h3>Stocks</h3>
    </div>
    <div class="stock">
        <h3>Testing</h3>
        <h3>Stocks</h3>
    </div>
</div>
    */