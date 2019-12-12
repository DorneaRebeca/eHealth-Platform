import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  hideBloodPressure : boolean = true;
  hideTemperature : boolean = true;
  hideBloodSugar : boolean = true;

  pressureData = {
    date : new Date(),
      systolic : 0,
      diastolic : 0,
      pulse : 0
    };
  tempData = {
    date: new Date(),
    temperature: 0.00,
  };
  sugarData = {
    date : new  Date(),
    bloodSugar : 0,
  };

  constructor(
    private dialogRef: MatDialogRef<MeasurementsComponent>,
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

  saveTemperature() {

  }

  saveBloodSugar() {
  }

  saveBloodPressure(){

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
