import { Component, OnInit, Inject, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { Step } from '../shared/step.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as uuid from 'uuid/v1';
import { Form, NgForm } from '@angular/forms';
import * as moment from 'moment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'timeline-step-create',
  templateUrl: './step-create.component.html',
  styleUrls: ['./step-create.component.css']
})
export class StepCreateComponent {

  public year: number;

  public newStep: Step = {
    title: '',
    notes: '',
    id: uuid(),
    date: null
  };

  constructor(
    public dialogRef: MatDialogRef<StepCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Step) {
    if (data) {
      this.newStep = data;
    }
  }

  addStep() {
    if (this.year) {
      this.newStep.date = moment().year(this.year);
    }
    this.dialogRef.close(this.newStep);
  }

}
