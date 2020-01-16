import {User} from '../../models/user';
import {Invoice} from '../../models/invoice';

export class InvoiceSerializer {
  fromJson(json: any): Invoice {
    const invoice = new Invoice();
    invoice.id = json.id;
    invoice.dateFacture = json.dateFacture;
    invoice.dateValidation = json.dateValidation;
    invoice.libelle = json.libelle;
    invoice.repartition = json.repartition;

    return invoice;
  }

  toJson(invoice: Invoice): any {
    return {
      id: invoice.id,
      dateFacture : invoice.dateFacture,
      dateValidation: invoice.dateValidation,
      libelle: invoice.libelle,
      repartition: invoice.repartition,
    };
  }
}
