import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {
  @ViewChild('pillsLogin', {static: false}) pillsLogin: ElementRef;
  @ViewChild('pillsRegister', {static: false}) pillsRegister: ElementRef;
  @ViewChild('navLogin', {static: false}) navLogin: ElementRef;
  @ViewChild('pillsRegister', {static: false}) navRegister: ElementRef;

  classActiveLogin = '';
  classActiveRegister = '';
  classShowRegister = '';
  classShowLogin = '';

  constructor( private titleService: Title, private authService: AuthService) { }

  ngOnInit() {
  }

  get isLoggedIn() { return this.authService.isLoggedIn(); }

  setPageTitle(title: string) {
    this.titleService.setTitle(title);
  }

  openModal(choice) {
    if (choice === 'login') {
        this.classActiveLogin = 'active';
        this.classShowRegister = '';
        this.classShowLogin = 'show';
        this.classActiveRegister = '';
    } else {
        this.classActiveRegister = 'active';
        this.classActiveLogin = '';
        this.classShowLogin = '';
        this.classShowRegister = 'show';
    }
  }
}
