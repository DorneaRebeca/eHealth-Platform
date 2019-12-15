import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  hideBloodPressure : boolean = true;
  hideTemperature : boolean = true;
  hideBloodSugar : boolean = true;

    presDate : Date = new Date();
      systolic  : number;
      diastolic : number;
      pulse : number;

    tempDate: Date =  new Date();
    temperature : number;


  sugarDate : Date =  new  Date();
  bloodSugar : number;


  constructor(
    private dialogRef: MatDialogRef<MeasurementsComponent>,
    private patientService : PatientService,
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

  saveTemperature() {
    let tempData = {
      date : this.tempDate,
      temperature : this.temperature
    };
    this.patientService.saveDataInLocalStorageArray(tempData, 'temperatureData');
  }

  saveBloodSugar() {
    let sugarData =
      {
        date : this.sugarDate,
        sugar : this.bloodSugar
  };
    this.patientService.saveDataInLocalStorageArray(sugarData, 'sugarData');

  }

  saveBloodPressure(){
    let pressureData = {
      date : this.presDate,
      systolic :this.systolic,
      diastolic : this.diastolic,
      pulseRate : this.pulse
    };
    this.patientService.saveDataInLocalStorageArray(pressureData, 'pressureData');

  }

  onClear() {

  }

  showBloodPressureForm() {
    this.hideBloodPressure = false;
    this.hideBloodSugar = true;
    this.hideTemperature = true;
  }

  showBloodSugarFrom() {
    this.hideBloodPressure = true;
    this.hideBloodSugar = false;
    this.hideTemperature = true;
  }

  showTemperatureForm() {
    this.hideBloodPressure = true;
    this.hideBloodSugar = true;
    this.hideTemperature = false;
  }

}
