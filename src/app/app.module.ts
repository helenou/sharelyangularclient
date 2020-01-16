import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/base/app.component';
import { LoginComponent } from './components/users/login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/users/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { HeaderComponent } from './components/header/header.component';
import {AuthService} from './services/auth.service';
import {AddInvoiceComponent} from './components/invoices/add-invoice/add-invoice.component';
import {ListInvoicesComponent} from './components/invoices/list-invoices/list-invoices.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    LoginComponent,
    AlertComponent,
    NotFoundComponent,
    RegisterComponent,
    UserDetailsComponent,
    AddInvoiceComponent,
    ListInvoicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [HeaderComponent, AppComponent]
})
export class AppModule { }
