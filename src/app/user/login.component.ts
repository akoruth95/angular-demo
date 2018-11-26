import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {

  constructor(private authService: AuthService, private router:Router) {

  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }

}
