import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent implements OnInit {

  events = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.http.get('http://localhost:5000/api/events')
      .subscribe((data) => this.events = data);
  }
}
