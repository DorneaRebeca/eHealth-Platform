import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AddMedicationComponent } from '../add-medication/add-medication.component';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-treatment',
  templateUrl: './add-treatment.component.html',
  styleUrls: ['./add-treatment.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AddTreatmentComponent implements OnInit {

    public items = [];
    visible = true;
    selectable = true;
    removable = true;

    public myForm = new FormGroup({
        startDate: new FormControl('', [
            Validators.required,
        ]),
        endDate: new FormControl('', [
            Validators.required,
        ])
    });

    constructor(
        private snackBar: MatSnackBar,
        private doctorService: DoctorService,
        private router: Router,
        private dialog: MatDialog
    ) { }

    loadItemsToCurrentMedicationPlan() {
        this.items = this.doctorService.getItemsFromCurrentTreatment();
    }

    removeItemFromNewTreatment(item) {
        this.doctorService.removeItemFromCurrentTreatment(item);
        this.loadItemsToCurrentMedicationPlan();
    }

    openAddMedicationForm() {
        this.dialog
            .open(AddMedicationComponent, {
                height: '400px',
                width: '500px',
                panelClass: 'myapp-no-padding-dialog'
            })
            .afterClosed()
            .subscribe(success => {
                if (success) {
                    this.loadItemsToCurrentMedicationPlan();
                }
            });
    }

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

    createTreatment() {
        if (!this.validationErrorsExists()) {
            this.snackBar.open('Success!', "", {
                duration: 3000,
                panelClass: ['green-snackbar']
            });
            this.router.navigate(["app-patient-detail"]);
        }
        else {
            this.snackBar.open('Something went wrong!', "", {
                duration: 3000,
                panelClass: ['red-snackbar']
            });
        }
    }

    ngOnInit() {
    }

}
