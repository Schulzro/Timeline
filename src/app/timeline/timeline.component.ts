import { Component, OnInit } from '@angular/core';
import { Step } from '../shared/step.model';
import { StepsService } from '../shared/steps.service';
import { StepCreateComponent } from '../step-create/step-create.component';
import { TimelineCustomEvent } from '../shared/utils/event.model';
import { MatDialog } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  title = 'Timeline';
  steps: Array<Step> = [];

  constructor(private stepsService: StepsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.stepsService.getAllSteps().subscribe(steps => this.steps = steps.map((step, index) => {
      step.align_right = index % 2 ? false : true;
      return step;
    }).reverse());
  }

  addStep() {
    const dialogRef = this.dialog.open(StepCreateComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.steps.unshift(result);
      }
    });
  }

  editStep(event: TimelineCustomEvent) {
    const dialogRef = this.dialog.open(StepCreateComponent, {
      width: '500px',
      data: this.steps.find(step => step.id === event.content)
    });
  }

  deleteStep(event: TimelineCustomEvent) {
    const index = this.steps.findIndex(step => step.id === event.content);
    if (index > -1) {
      this.steps.splice(index, 1);
    }
  }

}
