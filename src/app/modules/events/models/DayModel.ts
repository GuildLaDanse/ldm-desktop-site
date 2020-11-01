import {RaidWeekModel} from './RaidWeekModel';
import {Moment} from 'moment';
import * as moment from 'moment';


export class DayModel {

  private readonly day: Moment;
  private readonly raidWeekModel: RaidWeekModel;
  private events: Array<any>;
  private showMonth: boolean;

  constructor(day: Moment, raidWeekModel: RaidWeekModel) {
    this.day = day.clone();
    this.raidWeekModel = raidWeekModel;
    this.events = new Array<any>();
    this.showMonth = false;
  }

  public getDay(): Moment {
    return this.day;
  }

  public getEvents(): Array<any> {
    return this.events;
  }

  public isInThePast(): boolean {
    return this.day.isBefore(moment(), 'day');
  }

  public getShowMonth(): boolean {
    return this.showMonth;
  }

  public setShowMonth(showMonth: boolean) {
    this.showMonth = showMonth;
  }

  public isInRaidWeek(): boolean {
    return this.raidWeekModel.isInRaidWeek(this.day);
  }

  public isToday(): boolean {
    return this.day.isSame(moment(), 'day');
  }

  public getDisplayString(): string {
    if (this.showMonth) {
      return moment(this.day).format('MMM DD');
    } else {
      return moment(this.day).format('DD');
    }
  }

  public addEvent(event: any) {
    this.events.push(event);
  }

  public resetEvents(): void {
    this.events = new Array<any>();
  }
}
