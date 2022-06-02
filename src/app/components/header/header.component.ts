import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Ledger';
  showAddTransaction: boolean = false
  subscription: Subscription

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(boolean => this.showAddTransaction = boolean)
  }

  ngOnInit(): void {
  }

  toggleAddTransaction() {
    this.uiService.toggleAddTransaction()
  }

  hasRoute(route: string) {
    return this.router.url === route
  }

}
