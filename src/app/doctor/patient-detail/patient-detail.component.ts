import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {animate, state, style, transition, trigger} from '@angular/animations';

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
  patientDetails = [
    ['Age', '34 years old'],
    ['Gender', 'Male'],
    ['Height', '191 cm'],
    ['Weigth', '86 kg'],
  ];
  patientActivities = [];
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'start_date', 'duration'];
  expandedElement: Record | null;

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.patientActivities = this.doctorService.getDetailsForPatient('Pop Ionel')
  }

}

export interface Record {
  name: string;
  start_date: string;
  duration: number;
  description: string;
}

const ELEMENT_DATA: Record[] = [
  {
    name: 'Astm',
    start_date: '17-12-2019',
    duration: 15,
    description: 'Pacientul s-a prezentat cu stari febrile(39,8 C). I-au fost administrate calmante, iar in urma analizelor s-a observat un nivel ridicat de celule albe ceea ce a dus la o investigatie mai amanuntita.'
    },
  {
    name: 'Faringita',
    start_date: '17-12-2019',
    duration: 15,
    description: ''
  },
  {
    name: 'Laringita>',
    start_date: '17-12-2019',
    duration: 15,
    description: ''
  },
  {
    name: 'Bronsita',
    start_date: '17-12-2019',
    duration: 15,
    description: ''
  },
  {
    name: 'Pneumonie',
    start_date: '17-12-2019',
    duration: 15,
    description: ''
  },
  {
    name: 'Pneumonie',
    start_date: '17-12-2019',
    duration: 15,
    description: ''
  },
  {
    name: 'Pneumonie',
    start_date: '17-12-2019',
    duration: 15,
    description: ''
  },
  {
    name: 'Pneumonie',
    start_date: '17-12-2019',
    duration: 15,
    description: ''
  },
  {
    name: 'Pneumonie',
    start_date: '17-12-2019',
    duration: 15,
    description: ''
  },
  {
    name: 'Pneumonie',
    start_date: '17-12-2019',
    duration: 15,
    description: ''
  },
];
