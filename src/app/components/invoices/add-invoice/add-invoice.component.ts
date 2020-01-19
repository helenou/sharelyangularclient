import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {InvoiceService} from '../../../services/invoice.service';
import {AuthService} from '../../../services/auth.service';
import {AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  invoiceForm: FormGroup;
  error: {};
  invoiceError: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private invoiceService: InvoiceService,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      libelle: ['', Validators.required],
      montant: ['', Validators.required]
    });
  }

  get libelle() { return this.invoiceForm.get('libelle'); }
  get montant() { return this.invoiceForm.get('montant'); }

  onSubmit() {
    this.invoiceService.create(this.invoiceForm.value).subscribe((data) => {
        if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/invoices';
          this.alertService.success('Ajout réalisé avec succès', true);
          this.router.navigate([redirect]);
        } else {
          this.invoiceError = 'Impossible d\'ajouter la facture.';
        }
      },
      error => {
        this.alertService.error(error);
      }
    );
  }
}
