import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCommonModule, MatNativeDateModule} from "@angular/material/core";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatChipsModule} from "@angular/material/chips";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AccountService} from "../services/account.service";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FoodTrackerComponent} from "../patient/food-tracker/food-tracker.component";
import {MatCheckbox, MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltip, MatTooltipModule} from "@angular/material/tooltip";
import {MatProgressSpinner, MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatExpansionModule, MatGridListModule} from '@angular/material';
import {MeasurementsComponent} from '../patient/measurements/measurements.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import { DailyTreatmentComponent } from '../patient/daily-treatment/daily-treatment.component';
import { MydrugsComponent } from '../patient/mydrugs/mydrugs.component';
import { AskformoreComponent } from '../patient/askformore/askformore.component';
import {MatTabsModule} from "@angular/material/tabs";
import { QuizService } from '../services/quiz.service';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatCommonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule,
    MatMenuModule,
    MatListModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    FullCalendarModule,
    MatGridListModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  exports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatCommonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    CommonModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    FullCalendarModule,
    MatGridListModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  providers: [
    AccountService,
    QuizService
  ],
  entryComponents: [
    FoodTrackerComponent,
    MeasurementsComponent,
    DailyTreatmentComponent,
    MydrugsComponent,
    AskformoreComponent
  ],
})
export class SharedModule { }
