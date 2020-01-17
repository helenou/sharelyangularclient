import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  error: {};
  registerError: string;
  submitted = false;
  loading = false;

 constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    if (this.authenticationService.isLoggedIn() === true) { // à vérifier état du currentUser
      this.router.navigate(['/info']); // naviguer vers l'écran tableau de bord utilisateur
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get nom() { return this.registerForm.get('email'); }
  get prenom() { return this.registerForm.get('motDePasse'); }
  get email() { return this.registerForm.get('motDePasse'); }
  get motDePasse() { return this.registerForm.get('motDePasse'); }


  onSubmit() {
      this.submitted = true;

      this.alertService.clear();

      if (this.registerForm.invalid) {
        return;
      }

      this.loading = true;
      this.userService.create(this.registerForm.value)
        .pipe(first())
        .subscribe(
          data => {
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/login']);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
    }
}
