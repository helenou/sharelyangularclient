import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../../../services/invoice.service';
import {AuthService} from '../../../services/auth.service';
import {AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.css']
})
export class ListInvoicesComponent implements OnInit {
  invoices: {}

  constructor(
    private invoiceService: InvoiceService,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.invoiceService.readAll().subscribe((res: any) => {
      this.invoices = res.data.recordList;
    });
  }

}
