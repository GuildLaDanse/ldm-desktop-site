import { Component, OnInit } from '@angular/core';
import {Moment} from 'moment';
import * as moment from 'moment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-event-tile-content',
  templateUrl: './event-tile-content.component.html',
  styleUrls: ['./event-tile-content.component.scss']
})
export class EventTileContentComponent implements OnInit {

  private readonly SHOW_DATE_FORMAT = 'YYYYMMDD';

  public eventsPopulated = false;
  public events: Array<any> = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.initCalendar(moment());
  }

  initCalendar(fromD: Moment): void {
    const today = moment();

    // this.http.get('http://localhost:5000/api/events?fromDate=' + today.format(this.SHOW_DATE_FORMAT))
    this.http.get('http://localhost:5000/api/events?fromDate=20200831')
      .subscribe((data: Array<any>) => {
        this.events = data;
        this.eventsPopulated = true;
      });
  }

}
