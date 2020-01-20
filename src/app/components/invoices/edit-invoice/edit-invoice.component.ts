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
  invoice: {};
  id: string;
  libelle: string;
  repartition: string;
  montant: string;
  participations: {};
  lignesFactures: {};

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.invoiceService.read(Number(this.id)).subscribe((res: any) => {
      this.invoice = Array.of(res.data)[0];
      this.id = this.invoice["id"];
      this.libelle = this.invoice["libelle"];
      this.montant = this.invoice["montant"];
      this.participations = this.invoice["participations"];
      this.repartition = this.invoice["repartition"];
      this.lignesFactures = this.invoice["lignesFactures"];
    });
  }

  log(val) { console.log(val); }



}
