import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-view-event-page',
  templateUrl: './view-event-page.component.html',
  styleUrls: ['./view-event-page.component.scss']
})
export class ViewEventPageComponent implements OnInit {

  event = null;

  eventId = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEvent();
  }

  loadEventClicked() {
    this.event = null;
    this.getEvent();
  }

  getEvent() {
    this.http.get('http://localhost:5000/api/events/' + this.eventId)
      .subscribe((data) => this.event = data);
  }
}
