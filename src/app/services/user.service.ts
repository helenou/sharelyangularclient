import { Injectable } from '@angular/core';
import {GenericService} from './generic.service';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {UserSerializer} from '../components/users/UserSerializer';

@Injectable({
  providedIn: 'root'
})

export class UserService extends GenericService<User> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'http://localhost:8080/sharely',
      'me'
    );
  }
}
