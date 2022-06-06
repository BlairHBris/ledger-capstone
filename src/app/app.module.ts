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

const appRoutes: Routes = [
  {path:'', component: LinksComponent},
  {path:'transactions', component: TransactionsComponent},
  {path:'credits', component: CreditsComponent},
  {path:'debits', component: DebitsComponent},
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
