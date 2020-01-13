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

 
@Component({
  selector: 'app-mydrugs',
  templateUrl: './mydrugs.component.html',
  styleUrls: ['./mydrugs.component.css']
})
export class MydrugsComponent implements OnInit {

  elementData: Drug[] = [
  ];
  displayedColumns: string[] = ['position', 'name', 'perday', 'daysRemaining','availablequantity',"aksformore"];
  dataSource ;
  constructor(private snackBar: MatSnackBar,
    private patientService : PatientService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.elementData=this.patientService.getMyDrugs();
    console.log(this.elementData)
    this.dataSource = this.elementData;
  }
  
  aksForMore(selected){
    if(this.elementData[selected-1].daysRemaining>5){this.snackBar.open('There are enough medication in your pocket!', "", {
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
 
  
  

}
