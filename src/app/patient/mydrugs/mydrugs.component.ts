import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AskformoreComponent } from '../askformore/askformore.component';

export interface Drug {
  name: string;
  position: number;
  perday:number;
  daysRemaining: number;
  availablequantity: number;
}

const ELEMENT_DATA: Drug[] = [
  {position: 1, name: 'Medicament 1', perday: 1, daysRemaining: 5,availablequantity:5},
  {position: 2, name: 'Medicament 2', perday: 2, daysRemaining: 3,availablequantity:7},
];
@Component({
  selector: 'app-mydrugs',
  templateUrl: './mydrugs.component.html',
  styleUrls: ['./mydrugs.component.css']
})
export class MydrugsComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<MydrugsComponent>,
    private patientService : PatientService,
    public dialog: MatDialog) { }

  ngOnInit() {
  }
  onClose() {
    this.dialogRef.close();
  }
  aksForMore(selected){
    this.dialog.open(AskformoreComponent);
    console.log("you will receive prescription  for "+selected)
  }
  displayedColumns: string[] = ['position', 'name', 'perday', 'daysRemaining','availablequantity',"aksformore"];
  dataSource = ELEMENT_DATA;
  

}
