import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  event = null;

  eventId = 'test';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('eventId');
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
