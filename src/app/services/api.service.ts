import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '978dea7cf58c42b1b20eaa92cddd3955'

  constructor(private httpClient: HttpClient) {}

  public getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=${this.API_KEY}`)
  }
}
