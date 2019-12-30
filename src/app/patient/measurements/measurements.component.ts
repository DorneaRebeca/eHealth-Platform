import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef, MatExpansionPanel} from '@angular/material';
import {PatientService} from '../../services/patient.service';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

    presDate : Date = new Date();
      systolic  : number;
      diastolic : number;
      pulse : number;

    tempDate: Date =  new Date();
    temperature : number;


  sugarDate : Date =  new  Date();
  bloodSugar : number;

  systolicControl = new FormControl('', [Validators.required, Validators.max(999)]);
  diastolicControl = new FormControl('', [Validators.required, Validators.max(999)]);
  pulseControl = new FormControl('', [Validators.required, Validators.max(999)]);
  sugarControl = new FormControl('', [Validators.required, Validators.max(999)]);
  tempControl = new FormControl('', [Validators.required, Validators.max(99)]);

  @ViewChild('panel1', {static : false}) firstPanel: MatExpansionPanel;
  @ViewChild('panel2', {static : false}) secondPanel: MatExpansionPanel;
  @ViewChild('panel3', {static : false}) thirdPanel: MatExpansionPanel;

  constructor(
    private dialogRef: MatDialogRef<MeasurementsComponent>,
    private patientService : PatientService,
    private route : Router,
  ) { }

  ngOnInit() {
    this.showLoadingScreen(20);
  }

  onClose() {
    this.dialogRef.close();
  }

  saveTemperature() {
    let tempData = {
      date : this.tempDate,
      temperature : this.temperature
    };
    this.showLoadingScreen(1000);
    this.patientService.saveDataInLocalStorageArray(tempData, 'temperatureData');
    this.secondPanel.close();
  }

  saveBloodSugar() {
    let sugarData =
      {
        date : this.sugarDate,
        sugar : this.bloodSugar
  };
    this.showLoadingScreen(1000);
    this.patientService.saveDataInLocalStorageArray(sugarData, 'sugarData');
    this.thirdPanel.close();
  }

  saveBloodPressure(){
    let pressureData = {
      date : this.presDate,
      systolic :this.systolic,
      diastolic : this.diastolic,
      pulseRate : this.pulse
    };
    this.showLoadingScreen(1000);
    this.patientService.saveDataInLocalStorageArray(pressureData, 'pressureData');
    this.firstPanel.close();

  }

  onClear() {
    this.firstPanel.close();
    this.secondPanel.close();
    this.thirdPanel.close();
  }

  showLoadingScreen(predefined  = 0) {
    const interval = predefined == 0 ? Math.round(Math.random() * 10_000 % 200) * 10 : predefined;
    document.getElementById("loading-spinner").style.setProperty('display', 'block');
    return setTimeout(this.hideLoadingScreen, interval)
  }

  hideLoadingScreen() {
    document.getElementById("loading-spinner").style.setProperty('display', 'none');
  }

  openTutorial(vitalName : string) {
    localStorage.setItem('vitalName', vitalName);
   if(this.route.url == '/measurements-tutorial'){
     location.reload();
   }
   else {
     this.route.navigateByUrl('measurements-tutorial');
   }
    this.onClose();
  }

}
