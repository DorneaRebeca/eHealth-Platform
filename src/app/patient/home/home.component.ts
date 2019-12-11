import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  selectedDate : Date = new Date();

  measurementsMessage : string = 'Nu se gaseste nimic aici';
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

  measurements = [
    {
      patientID : 5,
      date : new Date('12/10/2019'),
      bodyTemperature : '37',
      systolic : '120',
      diastolic : '70',
      pulse : '68',
      bloodSugar : '120',
    },
    {
      patientID : 5,
      date : new Date('12/11/2019'),
      bodyTemperature : '37',
      systolic : '120',
      diastolic : '70',
      pulse : '68',
      bloodSugar : '120',
    },
    {
      patientID : 5,
      date : new Date('11/12/2019'),
      bodyTemperature : '37',
      systolic : '120',
      diastolic : '70',
      pulse : '68',
      bloodSugar : '120',
    }

  ];

  constructor(
    private router: Router
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
    let ok = 0;
    for(let i = 0; i < this.measurements.length; i++) {
      if(this.measurements[i].date.getTime() === this.selectedDate.getTime()) {
        ok = 1;
        this.measurementsMessage = '- Temperature : ' + this.measurements[i].bodyTemperature + ' Celsius \n';
        this.measurementsMessage += '- Diastolic rate : ' + this.measurements[i].diastolic + ' mmHb\n';
        this.measurementsMessage += '- Systolic rate : ' + this.measurements[i].systolic + ' mmHg\n';
        this.measurementsMessage += '- Pulse : ' + this.measurements[i].pulse + ' beats/second\n';
        this.measurementsMessage += '- Blood sugar : ' + this.measurements[i].bloodSugar + '\n';
        break;
      }
    }
    if(!ok)  this.measurementsMessage = '';
    return this.measurementsMessage;
  }

}

