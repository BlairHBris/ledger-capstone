import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-headers',
  templateUrl: './column-headers.component.html',
  styleUrls: ['./column-headers.component.css']
})
export class ColumnHeadersComponent implements OnInit {

  headers = ["Date", "Account", "Description", "Amount"]

  constructor() {}

  ngOnInit(): void {
  }

}
