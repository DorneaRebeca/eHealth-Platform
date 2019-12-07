import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(
        private snackBar: MatSnackBar,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    public myForm = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email
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

}

