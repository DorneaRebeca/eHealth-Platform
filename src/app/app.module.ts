import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {PatientModule} from "./patient/patient.module";
import {SharedModule} from "./shared/shared.module";
import { HomeComponent } from './doctor/home/home.component';
import {DoctorModule} from "./doctor/doctor.module";
import { FoodTrackerComponent } from './patient/food-tracker/food-tracker.component';
import { DailyTreatmentComponent } from './patient/daily-treatment/daily-treatment.component';
import { MydrugsComponent } from './patient/mydrugs/mydrugs.component';
import { AskformoreComponent } from './patient/askformore/askformore.component';
import { PatientsComponent } from './doctor/patients/patients.component';
import { PatientDetailComponent } from './doctor/patient-detail/patient-detail.component';
import { ChartHeartRateComponent } from './doctor/patient-detail/chart-heart-rate/chart-heart-rate.component';
import { ChartTemperatureComponent } from './doctor/patient-detail/chart-temperature/chart-temperature.component';
import { ChartBloodSugarComponent } from './doctor/patient-detail/chart-blood-sugar/chart-blood-sugar.component';
import { NutritionHistoryComponent } from './doctor/patient-detail/nutrition-history/nutrition-history.component';
import { AddPrescriptionComponent } from './doctor/add-prescription/add-prescription.component';
import { AddMedToPrescriptionComponent } from './doctor/add-med-to-prescription/add-med-to-prescription.component';
import { DownloadPrescriptionComponent } from './patient/download-prescription/download-prescription.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FoodTrackerComponent,
    DailyTreatmentComponent,
    MydrugsComponent,
    AskformoreComponent,
    PatientsComponent,
    PatientDetailComponent,
    ChartHeartRateComponent,
    ChartTemperatureComponent,
    ChartBloodSugarComponent,
    NutritionHistoryComponent,
    DownloadPrescriptionComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    PatientModule,
    DoctorModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
