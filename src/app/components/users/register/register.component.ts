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
      // tslint:disable-next-line:max-line-length
      password: ['', [Validators.required, Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]]
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

      this.authService.register(this.registerForm.value).subscribe((data) => {
        console.log(data);
      },
      error => this.error = error
    );
  }
}

