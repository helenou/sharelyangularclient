import { Injectable } from '@angular/core';
import {GenericService} from './generic.service';
import {HttpClient} from '@angular/common/http';
import {Invoice} from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends GenericService<Invoice> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'http://localhost:8080/sharely',
      'invoices'
    );
  }
}
