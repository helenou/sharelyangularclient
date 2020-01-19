import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  error: {};
  registerError: string;
 constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
  )  {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get lastName() { return this.registerForm.get('lastName'); }
  get firstName() { return this.registerForm.get('firstName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  onSubmit() {

      if (this.registerForm.invalid) {
        return 'Cannot create user, check the fields';
      }

      this.userService.create(this.registerForm.value).subscribe((data) => {
          if (this.authService.isLoggedIn() === true) {
            console.log('user already logged in. log out to create new one.');
            const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login'; } else {
          console.log('user creation, it should be created here - if no error');
          this.registerError = 'Impossible d\'ajouter l\'utilisateur.';
        }
      },
      error => this.error = error
    );
  }
}

