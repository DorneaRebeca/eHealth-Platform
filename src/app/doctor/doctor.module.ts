import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AddTreatmentComponent } from './add-treatment/add-treatment.component';
import { AddMedicationComponent } from './add-medication/add-medication.component';

@NgModule({
  declarations: [
    AddTreatmentComponent,
    AddMedicationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    AddMedicationComponent
  ]
})
export class DoctorModule { }
