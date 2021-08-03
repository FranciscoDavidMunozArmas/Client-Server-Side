import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarcontainerComponent } from './components/calendarcontainer/calendarcontainer.component';
import { ExamplemodalComponent } from './components/examplemodal/examplemodal.component';
import { AppmainComponent } from './components/appmain/appmain.component';
import { FloatingComponent } from './components/floating/floating.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarcontainerComponent,
    ExamplemodalComponent,
    AppmainComponent,
    FloatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
