import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DoctorService, Medication } from '../../services/doctor.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-add-med-to-prescription',
  templateUrl: './add-med-to-prescription.component.html',
  styleUrls: ['./add-med-to-prescription.component.css']
})
export class AddMedToPrescriptionComponent implements OnInit {

  prescription = new MatTableDataSource<Medication>();
  private displayedColumns = ["Medication", "Quantity", "Intake","Delete"];
  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getItemsFromCurrentPrescription();
    this.doctorService.changeList.subscribe((meds:Medication[])=>{
      this.prescription.data = meds;
      console.log(this.prescription);
    });
  }

  deleteMedication(item){
    // this.doctorService.addToMeds(item);
    this.doctorService.removeItemFromCurrentPrescription(item);
    this.loadItemsToCurrentMedicationPlan();
  }

  loadItemsToCurrentMedicationPlan() {
    this.prescription.data = this.doctorService.getItemsFromCurrentPrescription();
}

}
