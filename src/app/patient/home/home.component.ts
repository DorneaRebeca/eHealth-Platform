import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  exceededNutrition = 0;
  value = 80;
  bufferValue = 100;
  state = 'none';

  refreshIntervalId: any;
  selectedDate : Date = new Date();

  measurementsMessage : string = '';
  nutrientsMessage : string = '';
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
    this.patientService.nutritionValue.subscribe( value => {
      setTimeout(() => {
        document.getElementById("nutrients-progress-bar").scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        this.value = value.valueOf() * 100 / 2000;
        if(this.patientService.nutrients > 2000) {
          this.exceededNutrition += this.value;
        }
        this.nutrientsMessage = '';
        for(var i = 0; i < this.patientService.dailyMeals.length; i++){
          let meal = this.patientService.dailyMeals[i];
          if(meal.calories != 0) {
            this.nutrientsMessage += meal.name + ': ' + meal.calories + ' calories.\n\n';
          }
        }
        }, 100 );
    });
    this.refreshIntervalId = setInterval(() => this.startAnimate(), 1000);
  }
  update(v) {
    this.value = v;
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
    this.value = this.patientService.nutrients * 100 / 2000;
    if(this.patientService.nutrients > 2000) {
      this.exceededNutrition += 100;
    }
    clearInterval(this.refreshIntervalId);
  }
}

