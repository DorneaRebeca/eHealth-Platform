import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatCommonModule, MatDialogModule, MatButtonToggleModule, MatCardModule, MatIconModule, MatToolbarModule, MatSnackBarModule, MatTableModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatChipsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {PatientModule} from "./patient/patient.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {SharedModule} from "./shared/shared.module";
import { HomeComponent } from './doctor/home/home.component';
import {DoctorModule} from "./doctor/doctor.module";
import { FoodTrackerComponent } from './patient/food-tracker/food-tracker.component';
import { DailyTreatmentComponent } from './patient/daily-treatment/daily-treatment.component';
import { MydrugsComponent } from './patient/mydrugs/mydrugs.component';
import { AskformoreComponent } from './patient/askformore/askformore.component';
import { PatientsComponent } from './doctor/patients/patients.component';

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
