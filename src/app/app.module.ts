import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { LinksComponent } from './components/links/links.component';
import { CreditsComponent } from './components/credits/credits.component';
import { DebitsComponent } from './components/debits/debits.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreditComponent } from './components/credit/credit.component';
import { AccountLinksComponent } from './components/account-links/account-links.component';
import { CheckingComponent } from './components/checking/checking.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { SavingsComponent } from './components/savings/savings.component';
import { TotalsComponent } from './components/totals/totals.component';
import { ColumnHeadersComponent } from './components/column-headers/column-headers.component';
import { TableHeadingComponent } from './components/table-heading/table-heading.component';
import { StocksComponent } from './components/stocks/stocks.component';

const appRoutes: Routes = [
  {path:'', component: LinksComponent},
  {path:'transactions', component: TransactionsComponent},
  {path:'credits', component: CreditsComponent},
  {path:'debits', component: DebitsComponent},
  {path:'credit', component: CreditComponent},
  {path:'checking', component: CheckingComponent},
  {path:'investment', component: InvestmentComponent},
  {path:'savings', component: SavingsComponent},
  {path:'**', pathMatch: 'full', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TransactionsComponent,
    TransactionItemComponent,
    AddTransactionComponent,
    LinksComponent,
    CreditsComponent,
    DebitsComponent,
    PageNotFoundComponent,
    CreditComponent,
    AccountLinksComponent,
    CheckingComponent,
    InvestmentComponent,
    SavingsComponent,
    TotalsComponent,
    ColumnHeadersComponent,
    TableHeadingComponent,
    StocksComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
