import { Component, OnInit } from '@angular/core';
import { DetailedStock } from 'src/app/DetailedStock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-detailed-stock',
  templateUrl: './detailed-stock.component.html',
  styleUrls: ['./detailed-stock.component.css']
})
export class DetailedStockComponent implements OnInit {

  stock: string | undefined
  stocks: DetailedStock | undefined
  showDetailedStock: boolean = false

  constructor(private stocksService: StocksService) {}

  ngOnInit(): void {
  }

  displayStock({ stock } : {stock: string}) {
    this.stocksService.getdetailedStock(stock).subscribe((response: any) => {
      this.stocks = response
      this.stock = ''
      this.showDetailedStock = true
    }, 
    (error) => {
      console.error('error caught in component')
      alert('Stock Ticker invalid, please retry.')
    })
  }
}
