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
  duration=0;
  
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

  addItemToPrescription() {
    //let item : Medication =     
    
     //this.doctorService.removeFromMeds(this.myForm.controls['medications'].value)
    // this.medications=this.doctorService.getMedsPrescription();
    if(this.doctorService.findMedInPrescription(this.doctorService.getTreatmentMedicationDetails(this.myForm.controls['medications'].value.name))===-1){
      this.doctorService.addItemToCurrentPrescription(this.doctorService.getTreatmentMedicationDetails(this.myForm.controls['medications'].value.name))
      console.log(this.myForm.controls['medications'].value.name);
      
    }else{
      
      this.snackBar.open('You already added this medication to prescription', "", {
        duration: 3000,
        panelClass: ['red-snackbar']
    });

    }
    this.prescription=this.doctorService.getItemsFromCurrentPrescription();
  }

  onSubmit(){
    if (!this.validationErrorsExists()) {
      this.addItemToPrescription();
      // this.myForm.reset();
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
   this.prescription=this.doctorService.getItemsFromCurrentPrescription();
   
    this.loadTreatment();
  }
  public loadTreatment() {
    // this.treatment = this.doctorService.getItemsFromCurrentTreatment();
    this.treatment = this.doctorService.getTreatments();//.getItemsFromCurrentTreatment();
    console.log(this.treatment)
    this.medications=this.treatment[0].medications;
    
    let date1 = new Date(this.treatment[0].startDate);
    let date2 = new Date(this.treatment[0].endDate);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    this.duration = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    
    this.prescription=this.doctorService.getItemsFromCurrentPrescription();
    this.doctorService.addToMeds(this.medications)
  }

  ngOnChanges(){
    this.doctorService.changeList.subscribe(meds=>{
      this.prescription=meds;
    })
    console.log(this.prescription);
  }

  createPrescription(){
    
      let meds=this.doctorService.getItemsFromCurrentPrescription();
      if (!(meds.length===0)) {
        let pacient=[{id:this.patientDetails.id,name:this.patientDetails.name,age:this.patientDetails.age,gender:this.patientDetails.gender,cnp:this.patientDetails.cnp}]
      console.log(pacient);
      
        this.doctorService.addMedicationsToPrescription(pacient,meds,this.duration);
      this.snackBar.open('Success!', "", {
          duration: 3000,
          panelClass: ['green-snackbar']
      });
      this.router.navigate(["app-patient-detail"]);
  }
  else {
      this.snackBar.open('Prescription can not be empty!', "", {
          duration: 3000,
          panelClass: ['red-snackbar']
      });
  }
  }

}
