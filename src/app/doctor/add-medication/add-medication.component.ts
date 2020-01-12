import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { DoctorService, Medication } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.css']
})
export class AddMedicationComponent implements OnInit {

  public myForm = new FormGroup({
    dosage: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]*$")
    ]),
    intake: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]*$")
    ]),
    medications: new FormControl('', [
      Validators.required,
    ]),
  });

  public medications = [];

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private doctorService: DoctorService,
      private snackBar: MatSnackBar      
  ) { }

  loadMedications() {
      this.medications = this.doctorService.getMedications();
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
  
  addItemToTreatment() {
      let item : Medication = {
          name: this.myForm.controls['medications'].value.name,
          dosage: +this.myForm.controls['dosage'].value,
          description: "",
          intakeIntervals: +this.myForm.controls['intake'].value
      }
      this.doctorService.addItemToCurrentTreatment(item);
  }

  onSubmit(){
    if (!this.validationErrorsExists()) {
      this.addItemToTreatment();
    }
    else {
      this.snackBar.open('Something went wrong!', "", {
          duration: 3000,
          panelClass: ['red-snackbar']
      });
    }
  }

  ngOnInit() {
    this.loadMedications();
  }

}
