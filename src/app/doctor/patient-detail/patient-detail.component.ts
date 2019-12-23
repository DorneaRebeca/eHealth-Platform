import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../services/doctor.service";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})

export class PatientDetailComponent implements OnInit {
  patientDetails = [
    ['Age', '34 years old'],
    ['Gender', 'Male'],
    ['Height', '191 cm'],
    ['Weigth', '86 kg'],
  ];

  patientActivities = [];
  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.patientActivities = this.doctorService.getDetailsForPatient('Pop Ionel')
  }

}
