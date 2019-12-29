import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private patients = [];
  private displayedColumns = ["First name", "Last name", "Gender", "Birth date", "Address"];
  private dataSource: MatTableDataSource<Patient> = new MatTableDataSource();

  constructor(
    private accountService : AccountService
  ) { }

  public loadPatients() {
    this.patients = this.accountService.getPatients();
  }

  ngOnInit() {
    this.loadPatients();
  }

}
