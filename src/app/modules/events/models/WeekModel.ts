import {RaidWeekModel} from './RaidWeekModel';
import {Moment} from 'moment';
import {DayModel} from './DayModel';
import * as moment from 'moment';

export class WeekModel {

  private readonly firstDay: Moment;
  private readonly raidWeekModel: RaidWeekModel;
  private readonly days: Array<DayModel>;

  constructor(firstDay: Moment, raidWeekModel: RaidWeekModel) {
    this.firstDay = firstDay.clone();
    this.raidWeekModel = raidWeekModel;
    this.days = new Array<DayModel>();

    console.log('WeekModel - ' + this.firstDay.format('yyyy-MM-DD'));

    for (let firstDateDelta = 0; firstDateDelta < 7; firstDateDelta++)
    {
      const weekStart = this.firstDay.clone();
      weekStart.add(firstDateDelta, 'day');

      const dayModel = new DayModel(weekStart, this.raidWeekModel);

      dayModel.setShowMonth(weekStart.date() === 1);

      this.days.push(dayModel);
    }
  }

  public getFirstDay(): Moment {
    return this.firstDay;
  }

  public getDays(): Array<DayModel> {
    return this.days;
  }

  public isInWeek(day: Moment): boolean {
    const lastDate = moment(this.firstDay.clone());
    lastDate.add(6, 'day');

    return (day.isBetween(this.firstDay, lastDate, 'day')
        // since .isBetween() is not inclusive we have to check that separately
      || lastDate.isSame(day, 'day')
      || this.firstDay.isSame(day, 'day')
    );
  }

  public addEvent(event: any) {
    console.log('adding to event');
    for (const currentDay of this.days)
    {
      if (moment(event.inviteTime).isSame(currentDay.getDay(), 'day'))
      {
        currentDay.addEvent(event);
      }
    }
  }
}
