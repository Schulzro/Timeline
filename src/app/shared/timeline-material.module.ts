import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatDividerModule,
  MatGridListModule
} from '@angular/material';

import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatDividerModule,
    MatMomentDateModule,
    MatGridListModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatDividerModule,
    MatMomentDateModule,
    MatGridListModule
  ]
})
export class TimelineMaterialModule { }
