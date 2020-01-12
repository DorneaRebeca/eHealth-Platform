import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AddTreatmentComponent } from './add-treatment/add-treatment.component';
import { AddMedicationComponent } from './add-medication/add-medication.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { AddMedToPrescriptionComponent } from './add-med-to-prescription/add-med-to-prescription.component';

@NgModule({
  declarations: [
    AddTreatmentComponent,
    AddMedicationComponent,
    AddQuizComponent,
    AddQuestionComponent,
    AddPrescriptionComponent,
    AddMedToPrescriptionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    AddMedicationComponent,
    AddQuestionComponent
  ]
})
export class DoctorModule { }
