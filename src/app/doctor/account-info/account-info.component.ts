import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MeasurementsComponent} from "../../patient/measurements/measurements.component";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  selectedDate : Date = new Date();
  appointmentMessage : string = '';

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSelect(event) {
    this.selectedDate = event;
    this.getAppointments();
  }

  getAppointments() {
    const rand = Math.round(Math.random() % 4 * 10);
    switch (rand) {
      case 1:
        this.appointmentMessage = '\n\n * 11:00-12:00 Meet George \n' +
                    '* 13:00-13:30 Meet Andrew\n' +
                    '* 16:00-18:30 Meet Orange\n';
        break;
      case 2:
        this.appointmentMessage = '\n\n * 09:00-11:00 Meet John \n';
        break;
      case 3:
        this.appointmentMessage = '\n\n * 09:00-11:00 Meet Dorna \n' +
                    '* 11:00-12:00 Meet Paul\n' +
                    '* 12:00-13:00 Meet Maria\n' +
                    '* 13:00-14:00 Meet Tuodor\n';
        break;
      default:
        this.appointmentMessage = '\n\n * no appointment today!';
        break;
    }
  }
}
