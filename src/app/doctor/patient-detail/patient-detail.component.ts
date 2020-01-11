import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DoctorService, Patient} from '../../services/doctor.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Record} from '../../services/doctor.service';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import {Answer} from '../../services/quiz.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class PatientDetailComponent implements OnInit {
  patientDetails: Patient;
  patientActivities = [];
  dataSource = [];
  columnsToDisplay = ['name', 'start_date', 'duration'];
  expandedElement: Record | null;
  answeredForms = [];

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) { }

  ngOnInit() {
    let selectedPatientId = localStorage.getItem("selectedPatient");
    this.patientDetails = this.doctorService.getPatientDetails(+selectedPatientId);
    this.patientActivities = this.doctorService.getActivitiesForPatient(+selectedPatientId);
    this.dataSource = this.doctorService.getMedicalHistory(+selectedPatientId);
    this.getAnsweredForms();
  }

  openAddTreatmentPage() {
    this.router.navigate(["doctor-add-treatment"]);
  }

  openAddQuizPage() {
    this.router.navigate(["doctor-add-quiz"]);
  }

  getAnsweredForms() {
    let data = JSON.parse(localStorage.getItem('quizAnswers'));
    let patientId = localStorage.getItem("selectedPatient");
    for(let d of data) {
      if(d.patientId == patientId) {
        this.answeredForms.push(d);
      }
    }
  }
}
