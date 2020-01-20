import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './components/base/app.component';
import {LoginComponent} from './components/users/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RegisterComponent} from './components/users/register/register.component';
import {UserDetailsComponent} from './components/users/user-details/user-details.component';
import {AddInvoiceComponent} from './components/invoices/add-invoice/add-invoice.component';
import {ListInvoicesComponent} from './components/invoices/list-invoices/list-invoices.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {EditInvoiceComponent} from './components/invoices/edit-invoice/edit-invoice.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'info', component: UserDetailsComponent},
  { path: 'add-invoice', component: AddInvoiceComponent},
  { path: 'invoices', component: ListInvoicesComponent},
  { path: 'edit-invoice/:id', component: EditInvoiceComponent},

  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent } // ** => wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
