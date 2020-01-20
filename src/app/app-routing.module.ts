import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './components/base/app.component';
import {LoginComponent} from './components/users/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RegisterComponent} from './components/users/register/register.component';
import {DashboardComponent} from './components/users/dashboard/dashboard.component';
import {AddInvoiceComponent} from './components/invoices/add-invoice/add-invoice.component';
import {ListInvoicesComponent} from './components/invoices/list-invoices/list-invoices.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {EditInvoiceComponent} from './components/invoices/edit-invoice/edit-invoice.component';
import {HistoriqueComponent} from './components/users/historique/historique.component';
import {RemboursementsComponent} from './components/users/remboursements/remboursements.component';
import {DettesComponent} from './components/users/dettes/dettes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'add-invoice', component: AddInvoiceComponent},
  { path: 'invoices', component: ListInvoicesComponent},
  { path: 'edit-invoice/:id', component: EditInvoiceComponent},
  { path: 'historique', component: HistoriqueComponent},
  { path: 'remboursements', component: RemboursementsComponent},
  { path: 'dettes', component: DettesComponent},

  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent } // ** => wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
