import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  issueForm: FormGroup;
  IssueArr: any = [];

  ngOnInit() {
    this.login();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public userService: UserService
  ) { }

  login() {
    this.issueForm = this.fb.group({
      email: [''],
      motDePasse: ['']
    });
  }

  submitForm() {
    this.userService.Login(this.issueForm.value).subscribe(res => {
      console.log('Connexion en cours!');
      this.ngZone.run(() => this.router.navigateByUrl('/'));
    });
  }

}
