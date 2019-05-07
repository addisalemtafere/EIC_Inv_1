import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog2',
  templateUrl: './confirm-dialog2.component.html',
  styleUrls: ['./confirm-dialog2.component.scss']
})
export class ConfirmDialog2Component implements OnInit {
  public confirmMessage = "Do you have existing record on Investment commission ?";
  constructor(public dialogRef: MatDialogRef<ConfirmDialog2Component>,
    @Inject(MAT_DIALOG_DATA) data, ) {
  }


  ngOnInit() {
    // alert("i am here");
  }

}
