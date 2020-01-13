import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef, MatExpansionPanel, MatSnackBar} from '@angular/material';
import {PatientService} from '../../services/patient.service';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
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

  public bloodPressureForm = new FormGroup({
    systolicControl: new FormControl('', [Validators.required, Validators.max(999)]),
  diastolicControl : new FormControl('', [Validators.required, Validators.max(999)]),
  pulseControl : new FormControl('', [Validators.required, Validators.max(999)]),
      pressureDateControl: new FormControl('', [
        Validators.required,
      ]),
}
  );

  public sugarForm = new FormGroup({
    sugarControl : new FormControl('', [Validators.required, Validators.max(999)]),
    sugarDateControl: new FormControl('', [
      Validators.required,
    ]),

});
  public temperatureForm = new FormGroup(
    {
      tempControl: new FormControl('', [Validators.required, Validators.max(99)]),
      tempDateControl: new FormControl('', [
        Validators.required,
      ]),

}
  );

  @ViewChild('panel1', {static : false}) firstPanel: MatExpansionPanel;
  @ViewChild('panel2', {static : false}) secondPanel: MatExpansionPanel;
  @ViewChild('panel3', {static : false}) thirdPanel: MatExpansionPanel;

  constructor(
    private snackBar: MatSnackBar,
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
    if(!this.validationErrorsExistsTemp()) {
      let tempData = {
        date: this.tempDate,
        temperature: this.temperature
      };
      this.patientService.saveDataInLocalStorageArray(tempData, 'temperatureData');
      this.showLoadingScreen(1000);
      this.secondPanel.close();
    }
  }

  saveBloodSugar() {
    if(!this.validationErrorsExistsSugar()){
      let sugarData =
      {
        date : this.sugarDate,
        sugar : this.bloodSugar
  };
    this.patientService.saveDataInLocalStorageArray(sugarData, 'sugarData');
    this.showLoadingScreen(1000);
    this.thirdPanel.close();
  }

  }

  saveBloodPressure(){
    if(!this.validationErrorsExistsPressure()) {
      let pressureData = {
        date: this.presDate,
        systolic: this.systolic,
        diastolic: this.diastolic,
        pulseRate: this.pulse
      };
      this.patientService.saveDataInLocalStorageArray(pressureData, 'pressureData');
      console.log(localStorage.getItem('pressureData'));
      this.showLoadingScreen(1000);
      this.firstPanel.close();
    }
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

  validationErrorsExistsPressure(): boolean {
    var noOfErrors: number = 0;
    Object.keys(this.bloodPressureForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.bloodPressureForm.get(key).errors;
      if (controlErrors != null) {
        noOfErrors++;
      }
    });
    return noOfErrors > 0;
  }
  validationErrorsExistsTemp(): boolean {
    var noOfErrors: number = 0;
    Object.keys(this.temperatureForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.temperatureForm.get(key).errors;
      if (controlErrors != null) {
        noOfErrors++;
      }
    });

    return noOfErrors > 0;
  }
  validationErrorsExistsSugar(): boolean {
    var noOfErrors: number = 0;
    Object.keys(this.sugarForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.sugarForm.get(key).errors;
      if (controlErrors != null) {
        noOfErrors++;
      }
    });
    return noOfErrors > 0;
  }

}
