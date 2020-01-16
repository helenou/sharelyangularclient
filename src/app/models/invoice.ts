import {Generic} from './generic';

export class Invoice extends Generic {
  dateFacture: Date;
  dateValidation: Date;
  libelle: string;
  repartition: string;
}
