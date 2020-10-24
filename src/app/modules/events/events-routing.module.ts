import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventPageComponent} from './pages/event-page/event-page.component';
import {CalendarPageComponent} from './pages/calendar-page/calendar-page.component';
import {ViewEventPageComponent} from './pages/view-event-page/view-event-page.component';

const routes: Routes = [
  {
    path: 'events', component: EventPageComponent,
    children: [
      { path: '', component: CalendarPageComponent },
      { path: ':eventId', component: ViewEventPageComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
}
