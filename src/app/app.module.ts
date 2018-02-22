import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { TimelineMaterialModule } from './shared/timeline-material.module';
import { StepComponent } from './step/step.component';
import { SharedModule } from './shared/shared.module';
import { StepCreateComponent } from './step-create/step-create.component';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    StepCreateComponent,
    DashboardComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    TimelineMaterialModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
  ],
  entryComponents: [
    StepComponent,
    StepCreateComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
