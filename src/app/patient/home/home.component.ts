import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {interval, Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('progressBarTrigger', [
      transition(':enter', [
        style({transform: 'scaleX(0)'}), animate('500ms')
      ])]
    )
  ]
})

export class HomeComponent implements OnInit, AfterContentInit  {
  color = 'primary';
  mode = 'determined';
  value = 80;
  bufferValue = 75;
  state = 'none';

  refreshIntervalId = 0;
  selectedDate : Date = new Date();

  measurementsMessage : string = '';
  nutrientsMessage : string = 'Aci is nutrientii vietii';
  patientsNews  = [
    {
      from : 'Patrick',
      message : 'New recipe! Click to see!',
      src : '/home-patient',
      patientID : '5'
    },
    {
      from : 'Lola',
      message : 'Click here t answer a few questions!',
      src : '/home-patient',
      patientID : '5'
    },
    {
      from : 'Patrick',
      message : 'New recipe! Click to see!',
      src : '/login',
      patientID : '5'
    }
  ];

  ngAfterContentInit (): void {
    this.startAnimate();
    this.refreshIntervalId = setInterval(() => this.startAnimate(), 1000);
  }

  constructor(
    private router: Router,
    private patientService : PatientService,
  ) {}

  ngOnInit(): void {
    this.getMeasurements();
  }

  onSelect(event) {
    this.selectedDate = event;
    this.getMeasurements();
  }

  redirect(link : string) : void{
     window.location.href = link;
  }

  getMeasurements() : string {
    this.measurementsMessage = '';
    let bloodPressure = this.patientService.getDataOnDate(this.selectedDate, 'pressureData');
    let bloodSugar = this.patientService.getDataOnDate(this.selectedDate, 'sugarData');
    let temperature =  this.patientService.getDataOnDate(this.selectedDate, 'temperatureData');

    if(temperature) {
      this.measurementsMessage += '- Temperature : ' + temperature.temperature + ' Celsius \n\n';
    }
    if(bloodPressure) {
      this.measurementsMessage += '- Diastolic rate : ' + bloodPressure.diastolic + ' mmHb\n';
      this.measurementsMessage += '- Systolic rate : ' + bloodPressure.systolic + ' mmHg\n';
      this.measurementsMessage += '- Pulse : ' + bloodPressure.pulseRate + ' beats/second\n\n';
    }
    if(bloodSugar) {
      this.measurementsMessage += '- Blood sugar : ' + bloodSugar.sugar + '\n\n';
    }

    return this.measurementsMessage;
  }

  public startAnimate() {
    console.log(this.value);
    this.state = 'maximum';
    this.value -= 5;
    clearInterval(this.refreshIntervalId);
  }
}

