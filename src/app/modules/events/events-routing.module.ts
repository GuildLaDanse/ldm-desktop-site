import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventPageComponent} from './pages/event-page/event-page.component';
import {CalendarPageComponent} from './pages/calendar-page/calendar-page.component';
import {ViewEventPageComponent} from './pages/view-event-page/view-event-page.component';
import {AuthGuardService as AuthGuard} from '../../infrastructure/auth-guard/auth-guard.service';

const routes: Routes = [
  {
    path: 'events', component: EventPageComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: CalendarPageComponent, canActivate: [AuthGuard] },
      { path: ':eventId', component: ViewEventPageComponent, canActivate: [AuthGuard] },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
}
