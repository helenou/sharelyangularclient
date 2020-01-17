import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
//import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  //loading = false;
  //submitted = false;

  error: {};
  registerError: string;



 constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    //private alertService: AlertService
  )  {}
  //{
 //   if (this.authenticationService.isLoggedIn() === true) { // à vérifier état du currentUser
 //     this.router.navigate(['/info']); // naviguer vers l'écran tableau de bord utilisateur
 //   }
 // }

  ngOnInit() {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

/*   get nom() { return this.registerForm.get('nom'); }
  get prenom() { return this.registerForm.get('prenom'); }
  get email() { return this.registerForm.get('email'); }
  get motDePasse() { return this.registerForm.get('motDePasse'); } */
  
  get lastName() { return this.registerForm.get('lastName'); }
  get firstName() { return this.registerForm.get('firstName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  onSubmit() {
      //this.submitted = true;

      //this.alertService.clear();

      if (this.registerForm.invalid) {
        return "Cannot create user, check the fields";
      }

      //this.loading = true;
      this.userService.create(this.registerForm.value).subscribe((data) => {
          if (this.authService.isLoggedIn() === true) {
            console.log("user already logged in. log out to create new one.");
            const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';
            
            //this.alertService.success('Registration successful', true);
	        } else {
          //this.registerError =
          //return  'Impossible de vous enregistrer.';
          console.log("user creation, it should be created here - if no error");
          this.registerError = 'Impossible d\'ajouter l\'utilisateur.';
        }
      },
      error => this.error = error
    );
  }
}


////        }
	    
////          },
////          error => {
////            this.alertService.error(error);
            //this.loading = false;
////           }
////	  );
////    }
////}
