import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-daily-treatment',
  templateUrl: './daily-treatment.component.html',
  styleUrls: ['./daily-treatment.component.css']
})
export class DailyTreatmentComponent implements OnInit {

  drugsBreakfast = [
    {name: 'Medicament 1',selected:false},
    {name: 'Medicament 2',selected:true},
    {name: 'Medicament 3',selected:false}
  ];
  selecteddrugs = [
    {name: 'Medicament 1',selected:false}
    
  ];

  drugsLunch = [
  ];
  drugsDinner = [
  ];
  hideBeforeBreakfast : boolean = true;
  hideBeforeLunch : boolean = true;
  hideBeforeDinner : boolean = true;

  // beforeBreakfast:  FormControl=new FormControl(this.drugsBreakfast)
  public myForm = new FormGroup({
    
    beforeBreakfast: new FormControl('', [
        // Validators.required,
    ]),
    beforeLunch: new FormControl('', [
      // Validators.required,
  ]),
  beforeDinner: new FormControl('', [
    // Validators.required,
])
  });

  constructor(
    private dialogRef: MatDialogRef<DailyTreatmentComponent>,
    private patientService : PatientService,
  ) {
    
   }

  ngOnInit() {
    this.drugsBreakfast=this.patientService.drugsBreakfast
    this.drugsLunch=this.patientService.drugsLunch
    this.drugsDinner=this.patientService.drugsDinner
    this.myForm.setValue({beforeBreakfast:this.patientService.getSelectedDrugs(),beforeLunch: this.patientService.getSelectedDrugsLunch(),
  beforeDinner:this.patientService.getSelectedDrugsDinner()})
  console.log(this.patientService.getSelectedDrugsLunch())
    //this.selecteddrugs=this.patientService.getSelectedDrugs();
  }
  onClose() {

    this.patientService.setDrugsForBeakfast(this.drugsBreakfast);
    this.patientService.setDrugsForLunch(this.drugsLunch);
    this.patientService.setDrugsForDinner(this.drugsDinner);
    let s=this.myForm.controls.beforeBreakfast.value;
    let l=this.myForm.controls.beforeLunch.value;
    let d=this.myForm.controls.beforeDinner.value;
    console.log(this.myForm.controls.beforeBreakfast.value)
    console.log(this.myForm.controls.beforeDinner.value)
    console.log(this.myForm.controls.beforeLunch.value)
    this.patientService.setSelectedDrugs(s)
    this.patientService.setSelectedDrugsDinner(d)
    this.patientService.setSelectedDrugsLunch(l)
    this.dialogRef.close();
  }
  ngOnDestroy(){
    this.patientService.setDrugsForBeakfast(this.drugsBreakfast);
    this.patientService.setDrugsForLunch(this.drugsLunch);
    this.patientService.setDrugsForDinner(this.drugsDinner);
    let s=this.myForm.controls.beforeBreakfast.value;
    let l=this.myForm.controls.beforeLunch.value;
    let d=this.myForm.controls.beforeDinner.value;
    console.log(this.myForm.controls.beforeBreakfast.value)
    console.log(this.myForm.controls.beforeDinner.value)
    console.log(this.myForm.controls.beforeLunch.value)
    this.patientService.setSelectedDrugs(s)
    this.patientService.setSelectedDrugsDinner(d)
    this.patientService.setSelectedDrugsLunch(l)
  }


  somethingChanged(event){
    console.log("ai medicament?")
  }

}
