import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import {AccountService} from "../services/account.service";
import {init} from "protractor/built/launcher";

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
      } else if(userType == 1) {
        this.router.navigate(['home-patient']);
        this.initMeasurements();
      } else if(userType == 2) {
        this.router.navigate(['home-doctor']);
      }
    this.accountService.shouldShowNavBar.next(false);
  }

  initMeasurements() {
    var meals = [];
    meals.push({name: 'Breakfast', status: false, calories: 0});
    meals.push({name: 'Lunch', status: false, calories: 0});
    meals.push({name: 'Dinner', status: false, calories: 0});
    meals.push({name: 'Snack', status: false, calories: 0});
    localStorage.setItem('dailyMeals', JSON.stringify(meals));
    localStorage.setItem('nutrients', JSON.stringify(0));
  }
}

