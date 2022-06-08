import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stockNames = ["SNP"]

  stocks: any = []

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stockNames.forEach((stockName) => {
      this.stockService.getStock(stockName).subscribe(response => {
        this.stocks = response
        console.log(this.stocks)
      })
    })

  }

}
