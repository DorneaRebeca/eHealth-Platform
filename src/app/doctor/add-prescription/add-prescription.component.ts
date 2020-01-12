import { Component, OnInit, OnChanges } from '@angular/core';
import {DoctorService, Patient, Medication} from '../../services/doctor.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { MatTableDataSource, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent implements OnInit,OnChanges {

  public myForm = new FormGroup({
    
    medications: new FormControl('', [
      Validators.required,
    ]),
  });
  private patients = [];
  private displayedColumns = ["Medication", "Quantity", "Intake","Details","Delete"];
  //private dataSource: MatTableDataSource<Patient> = new MatTableDataSource();
  private treatment=[];
  private prescription=[];
  private medications=[];
  patientDetails: Patient;

  
  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private snackBar: MatSnackBar 
  ) {
    
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
    //let item : Medication =     
    this.doctorService.addItemToCurrentPrescription(this.doctorService.getTreatmentMedicationDetails(this.myForm.controls['medications'].value.name))
    console.log(this.myForm.controls['medications'].value.name);
    this.prescription=this.doctorService.getItemsFromCurrentPrescription();
  }

  onSubmit(){
    if (!this.validationErrorsExists()) {
      this.addItemToTreatment();
      this.myForm.reset();
    }
    else {
      this.snackBar.open('Something went wrong!', "", {
          duration: 3000,
          panelClass: ['red-snackbar']
      });
    }
  }

  ngOnInit() {
    let selectedPatientId = 0;//localStorage.getItem("selectedPatient");
    this.patientDetails = this.doctorService.getPatientDetails(+selectedPatientId);
   // this.loadPatients();
    this.loadTreatment();
  }
  public loadTreatment() {
    // this.treatment = this.doctorService.getItemsFromCurrentTreatment();
    this.treatment = this.doctorService.getTreatments();//.getItemsFromCurrentTreatment();
    console.log(this.treatment)
    this.medications=this.treatment[1].medications;
    this.prescription=this.doctorService.getItemsFromCurrentPrescription();
    console.log(this.treatment[1].medications)
  }

  ngOnChanges(){
    this.doctorService.changeList.subscribe(meds=>{
      this.prescription=meds;
    })
    console.log(this.prescription);
  }

}
