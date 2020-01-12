import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DoctorService, Medication } from '../../services/doctor.service';

@Component({
  selector: 'app-add-med-to-prescription',
  templateUrl: './add-med-to-prescription.component.html',
  styleUrls: ['./add-med-to-prescription.component.css']
})
export class AddMedToPrescriptionComponent implements OnInit {

  prescription:Medication[];
  private displayedColumns = ["Medication", "Quantity", "Intake","Details","Delete"];
  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getItemsFromCurrentPrescription();
    this.doctorService.changeList.subscribe((meds:Medication[])=>{
      this.prescription=meds;
      console.log(this.prescription);
    });
  }


}
