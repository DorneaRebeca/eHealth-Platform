import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MeasurementsComponent } from './measurements/measurements.component';
import { MeasurementsTutorialComponent } from './measurements-tutorial/measurements-tutorial.component';
import { QuizResponseComponent } from './quiz-response/quiz-response.component';


@NgModule({
  declarations: [
    HomeComponent,
    MeasurementsComponent,
    MeasurementsTutorialComponent,
    QuizResponseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
  ],
})
export class PatientModule { }
