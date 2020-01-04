import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

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
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  private patients = [];
  private displayedColumns = ["Name", "Age", "Gender", "Height", "Weigth", "Cnp", "Address", "Details"];
  private dataSource: MatTableDataSource<Patient> = new MatTableDataSource();
  
  constructor(
    private doctorService: DoctorService,
    private router : Router
  ) { }

  ngOnInit() {
    this.loadPatients();
  }
  
  public loadPatients() {
    this.patients = this.doctorService.getPatients();
  }

  public showPatientDetails(patient) {
    localStorage.setItem("selectedPatient", patient.id);
    this.router.navigateByUrl('/app-patient-detail').then(r => {});
  }

}
