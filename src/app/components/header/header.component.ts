import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Ledger';
  showAddTransaction: boolean = false
  subscription: Subscription

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(boolean => this.showAddTransaction = boolean)
  }

  ngOnInit(): void {
  }

  toggleAddTransaction() {
    this.uiService.toggleAddTransaction()
  }

}
