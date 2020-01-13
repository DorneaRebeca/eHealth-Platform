import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AskformoreComponent } from '../askformore/askformore.component';

export interface Drug {
  name: string;
  position: number;
  perday:number;
  daysRemaining: number;
  availablequantity: number;
}

const ELEMENT_DATA: Drug[] = [
  {position: 1, name: 'Medicament 1', perday: 1, daysRemaining: 6,availablequantity:6},
  {position: 2, name: 'Medicament 2', perday: 2, daysRemaining: 3,availablequantity:7},
  {position: 3, name: 'Medicament 3', perday: 2, daysRemaining: 3,availablequantity:7},
  {position: 4, name: 'Medicament 5', perday: 2, daysRemaining: 3,availablequantity:6},
  {position: 5, name: 'Medicament 6', perday: 2, daysRemaining: 3,availablequantity:7},
  {position: 6, name: 'Medicament 8', perday: 2, daysRemaining: 3,availablequantity:7},
  {position: 7, name: 'Medicament 10', perday: 2, daysRemaining: 3,availablequantity:7},
  {position: 8, name: 'Medicament 13', perday: 2, daysRemaining: 3,availablequantity:7},
];
@Component({
  selector: 'app-mydrugs',
  templateUrl: './mydrugs.component.html',
  styleUrls: ['./mydrugs.component.css']
})
export class MydrugsComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
    // private dialogRef: MatDialogRef<MydrugsComponent>,
    private patientService : PatientService,
    public dialog: MatDialog) { }

  ngOnInit() {
  }
  // onClose() {
  //   this.dialogRef.close();
  // }
  aksForMore(selected){
  //   this.dialog.open(AskformoreComponent, {
      
  // });
    if(ELEMENT_DATA[selected-1].daysRemaining>5){this.snackBar.open('There are enough medication in your pocket!', "", {
      duration: 3000,
      panelClass: ['red-snackbar']
      });
    }
    else{
      this.snackBar.open('You will receive a new prescription for these drugs in no time!', "", {
      duration: 3000,
      panelClass: ['green-snackbar']
      });
      console.log("you will receive prescription  for "+selected)
    }
  }
  displayedColumns: string[] = ['position', 'name', 'perday', 'daysRemaining','availablequantity',"aksformore"];
  dataSource = ELEMENT_DATA;
  

}
