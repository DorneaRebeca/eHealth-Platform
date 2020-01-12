import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent  as HomePatientComponent} from './patient/home/home.component';
import {HomeComponent as HomeDoctorComponent} from './doctor/home/home.component';
import {PatientsComponent} from './doctor/patients/patients.component';
import {PatientDetailComponent} from './doctor/patient-detail/patient-detail.component';
import {MeasurementsTutorialComponent} from './patient/measurements-tutorial/measurements-tutorial.component';
import { AddTreatmentComponent } from './doctor/add-treatment/add-treatment.component';
import { AddQuizComponent } from './doctor/add-quiz/add-quiz.component';
import { AddPrescriptionComponent } from './doctor/add-prescription/add-prescription.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent } ,
    { path: 'home-patient', component: HomePatientComponent },
    { path: 'home-doctor', component: HomeDoctorComponent },
    { path: 'app-patients', component: PatientsComponent },
    { path: 'doctor-patients', component: PatientsComponent },
    { path: 'doctor-add-treatment', component: AddTreatmentComponent },
    { path: 'doctor-add-prescription', component: AddPrescriptionComponent },
    { path: 'doctor-add-quiz', component: AddQuizComponent },
    { path: 'app-patient-detail', component: PatientDetailComponent},
    { path: 'measurements-tutorial', component: MeasurementsTutorialComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
