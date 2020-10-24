import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import {FormsModule} from '@angular/forms';
import { ViewEventPageComponent } from './pages/view-event-page/view-event-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import {EventsRoutingModule} from './events-routing.module';
import {EventPageComponent} from './pages/event-page/event-page.component';



@NgModule({
  declarations: [
    EventPageComponent,
    EventDetailComponent,
    ViewEventPageComponent,
    CalendarPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
