import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from '@angular/material';
import { AccountService } from 'src/app/services/account.service';

export interface Patient {
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  cnp: string,
  gender: string,
  birthDate: string,
  address: string
}

@Component({
  selector: 'app-home-doctor',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  private patients = [];
  private displayedColumns = ["First name", "Last name", "Gender", "Birth date", "Address"];
  private dataSource: MatTableDataSource<Patient> = new MatTableDataSource();
  selectedDate : Date = new Date();
  appointmentMessage : string = '';
  dates = [];

  constructor(
    private accountService : AccountService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadPatients();
    this.getAppointments();
  }

  public loadPatients() {
    this.patients = this.accountService.getPatients();
  }

  dateClass = (d: Date) => {
    const date = d.getDate();
    return this.dates[date] ? 'no-appointment' : undefined;
  };

  onSelect(event) {
    this.selectedDate = event;
    this.appointmentMessage = this.dates[event.getDate()] ? this.dates[event.getDate()] : '\n\n * no appointment today!';
  }

  getAppointments() {
    const rand = Math.round(Math.random() * 100 % 15);
    for(let i=0;i<rand;i++) {
      var msg;
      switch (Math.round(Math.random() * 100 % 4)) {
        case 1:
          msg = '\n\n * 11:00-12:00 Meet George \n' +
            '* 13:00-13:30 Meet Andrew\n' +
            '* 16:00-18:30 Meet Orange\n';
          break;
        case 2:
          msg = '\n\n * 09:00-11:00 Meet John \n';
          break;
        case 3:
          msg = '\n\n * 09:00-11:00 Meet Dorna \n' +
            '* 11:00-12:00 Meet Paul\n' +
            '* 12:00-13:00 Meet Maria\n' +
            '* 13:00-14:00 Meet Tudor\n';
          break;
        default:
          msg = '\n\n * 12:00-13:00 Meet Maria\n';
          break;
      }
      const day = Math.round(Math.random() * 100 % 30);
      // this.dates.push({day: day,  msg: this.appointmentMessage});
      this.dates[day] = msg;
    }
  }
}
