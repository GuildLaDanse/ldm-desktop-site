import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Moment} from 'moment';
import * as moment from 'moment';
import {RaidWeekModel} from '../../models/RaidWeekModel';
import {CalendarMonthModel} from '../../models/CalendarMonthModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent implements OnInit {

  private readonly SHOW_DATE_FORMAT = 'YYYYMMDD';

  public readyToRenderCalendar = true;
  public eventsPopulated = false;

  private showDate: Moment;

  private currentRaidWeek: RaidWeekModel;
  public calendarMonth: CalendarMonthModel;

  public events: Array<any> = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let tempShowDate = moment(params.showDate, this.SHOW_DATE_FORMAT);
      if (!tempShowDate.isValid()) { tempShowDate = moment(); }
      this.initCalendar(tempShowDate);
    });
  }

  public olderButtonClicked(): void {
    this.initCalendar(this.calendarMonth.getStartOfPreviousMonth());
  }

  public newerButtonClicked(): void {
    this.initCalendar(this.calendarMonth.getStartOfNextMonth());
  }

  public todayButtonClicked(): void {
    this.initCalendar(moment());
  }

  initCalendar(showDate: Moment): void {
    this.showDate = showDate;

    this.currentRaidWeek = new RaidWeekModel(moment());
    this.calendarMonth = new CalendarMonthModel(this.showDate, this.currentRaidWeek);

    this.getEvents(this.calendarMonth.getFirstDay());
  }

  getEvents(fromDate: Moment) {
    this.eventsPopulated = false;
    this.http.get('http://localhost:5000/api/events?fromDate=' + fromDate.format(this.SHOW_DATE_FORMAT))
      .subscribe((data: Array<any>) => this.populateEvents(data));
  }

  populateEvents(events: Array<any>): void {
    this.events = events;

    this.calendarMonth.populateEvents(this.events);

    //this.readyToRenderCalendar = true;
    this.eventsPopulated = true;
  }
}
