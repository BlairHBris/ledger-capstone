import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from 'src/app/Stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stockNames = ["SNP"]

  stocks: Stock[] = []

  stock: Stock | undefined

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stockNames.forEach((stockName) => {
      this.stockService.getStock(stockName).subscribe(response => {
        console.log(response)
      })
    })
    if(this.stock) {
      console.log(this.stock["Meta Data"]["2. Symbol"])
    }
  }

}
