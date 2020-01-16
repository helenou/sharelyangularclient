import {Generic} from '../models/generic';

export interface Serializer {
  fromJson(json: any): Generic;
  toJson(resource: Generic): any;
}
