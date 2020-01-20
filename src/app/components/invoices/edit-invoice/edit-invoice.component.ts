import { Component, OnInit } from '@angular/core';
import {Invoice} from '../../../models/invoice';
import {InvoiceService} from '../../../services/invoice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {
  id: string;
  invoice: {};

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.invoiceService.read(Number(this.id)).subscribe((res: any) => {
      this.invoice = Array.of(res.data)[0];
    });
  }


}
