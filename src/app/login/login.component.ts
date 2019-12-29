import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private snackBar: MatSnackBar,
      private accountService: AccountService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.accountService.shouldShowNavBar.next(false);
  }

  public myForm = new FormGroup({
      email: new FormControl('', [
          Validators.required,
      ]),
      password: new FormControl('', [
          Validators.required,
      ])
  });

  validationErrorsExists(): boolean {
      var noOfErrors: number = 0;
      Object.keys(this.myForm.controls).forEach(key => {
          const controlErrors: ValidationErrors = this.myForm.get(key).errors;
          if (controlErrors != null) {
              noOfErrors++;
          }
      });
      return noOfErrors > 0;
  }
  public login() {
      let userType = this.accountService.canLogin(this.myForm.controls['email'].value, this.myForm.controls['password'].value);
      if(userType == 0) {
        this.snackBar.open('Invalid email/password', '', {duration: 3000});
        return;
      } 
      else if(userType == 1) {
        this.router.navigate(['home-patient']);
        this.accountService.shouldShowNavBar.next(true);
      } 
      else if(userType == 2) {
        this.router.navigate(['home-doctor']);
        this.accountService.shouldShowNavBar.next(true);
      }
  }
}

