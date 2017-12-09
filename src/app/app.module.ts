import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TimelineMaterialModule } from './shared/timeline-material.module';


@NgModule({
  declarations: [
    AppComponent,
    TimelineItemComponent
  ],
  imports: [
    BrowserModule,
    TimelineMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
