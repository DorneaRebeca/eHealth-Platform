import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-daily-treatment',
  templateUrl: './daily-treatment.component.html',
  styleUrls: ['./daily-treatment.component.css']
})
export class DailyTreatmentComponent implements OnInit {

  drugsBreakfast = [
    {name: 'Medicament 1',selected:false},
    {name: 'Medicament 2',selected:false},
    {name: 'Medicament 3',selected:false}
  ];
  drugsLunch = [
  ];
  drugsDinner = [
  ];
  hideBeforeBreakfast : boolean = true;
  hideBeforeLunch : boolean = true;
  hideBeforeDinner : boolean = true;
  constructor(
    private dialogRef: MatDialogRef<DailyTreatmentComponent>,
    private patientService : PatientService,
  ) {
    
   }

  ngOnInit() {
    this.drugsBreakfast=this.patientService.drugsBreakfast
    this.drugsLunch=this.patientService.drugsLunch
    this.drugsDinner=this.patientService.drugsDinner
  }
  onClose() {

    this.patientService.setDrugsForBeakfast(this.drugsBreakfast);
    this.patientService.setDrugsForLunch(this.drugsLunch);
    this.patientService.setDrugsForDinner(this.drugsDinner);
    this.dialogRef.close();
  }



  showBreakfastForm() {
    this.hideBeforeBreakfast = !this.hideBeforeBreakfast;
    this.hideBeforeDinner = true;
    this.hideBeforeLunch = true;
  }

  showLunchFrom() {
    this.hideBeforeBreakfast = true;
    this.hideBeforeLunch= !this.hideBeforeLunch;
    this.hideBeforeDinner = true;
  }

  showDinnerForm() {
    this.hideBeforeBreakfast = true;
    this.hideBeforeLunch= true;
    this.hideBeforeDinner= ! this.hideBeforeDinner;
  }

}
