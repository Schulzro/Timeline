import { Step } from '../shared/step.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimelineCustomEvent } from '../shared/utils/event.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'timeline-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  showSettings: boolean;

  @Input()
  step: Step;

  @Output() delete: EventEmitter<TimelineCustomEvent> = new EventEmitter();

  @Output() edit: EventEmitter<TimelineCustomEvent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.showSettings = false;
  }

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

  deleteStep() {
    this.delete.emit({
      type: 'delete',
      content: this.step.id
    });
  }

  editStep() {
    this.edit.emit({
      type: 'edit',
      content: this.step.id
    });
  }
}
