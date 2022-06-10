import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  stocks: any

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getStocks().subscribe((response: any) => {
      console.log(response)
      this.stocks = response
    })
  }
}