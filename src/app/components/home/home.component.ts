import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;

  constructor(
    private authenticationService: AuthService,
  ) {
    console.log(this.authenticationService.isLoggedIn());
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

}
