import {Moment} from 'moment';
import {RaidWeekModel} from './RaidWeekModel';
import {WeekModel} from './WeekModel';
import * as moment from 'moment';

export class CalendarMonthModel {

  private readonly firstDay: Moment;
  private readonly raidWeekModel: RaidWeekModel;
  private readonly weeks: Array<WeekModel>;

  private static calculateFirstDay(showDay: Moment, raidWeekModel: RaidWeekModel): Moment {
    const firstDay = showDay.clone().isoWeekday(1);

    console.log(firstDay.format('yyyy-MM-DD'));

    if (raidWeekModel.isInRaidWeek(firstDay))
    {
      // a monday and it fits in the current raid week, we have to move 7 days back

      return firstDay.subtract(7, 'day');
    }

    /* we comment this out as not showing the entire raid week at the end of the months is not really an issue
       and it fixes a "back button" issue

       var lastDay = firstDay.clone().add(28, 'day');

    if (raidWeekModel.isInRaidWeek(lastDay))
    {
        // a friday and it fits in the current raid week, we have to move 7 days forward
        return firstDay.add(7, 'day');
    }
     */

    return firstDay;
  }

  constructor(showDay: Moment, raidWeekModel: RaidWeekModel) {
    this.firstDay = CalendarMonthModel.calculateFirstDay(showDay, raidWeekModel);
    this.raidWeekModel = raidWeekModel;
    this.weeks = new Array<WeekModel>();

    console.log('CalendarMonthModel - ' + this.firstDay.format('yyyy-MM-DD'));

    const firstWeekDate = this.firstDay.clone();

    for (let i = 0; i < 4; i++)
    {
      const weekModel = new WeekModel(firstWeekDate, this.raidWeekModel);

      this.weeks.push(weekModel);

      firstWeekDate.add(7, 'day');
    }

    this.weeks[0].getDays()[0].setShowMonth(true);
  }

  public getFirstDay(): Moment {
    return this.firstDay;
  }

  public getWeeks(): Array<WeekModel> {
    return this.weeks;
  }

  public getStartOfPreviousMonth(): Moment {
    return this.firstDay.clone().add(-28, 'day');
  }

  public getStartOfNextMonth(): Moment {
    return this.firstDay.clone().add(28, 'day');
  }

  public populateEvents(events: Array<any>) {
    this.resetEvents();
    for (const currentEvent of events)
    {
      for (const currentWeek of this.weeks)
      {
        if (currentWeek.isInWeek(moment(currentEvent.inviteTime)))
        {
          currentWeek.addEvent(currentEvent);
        }
      }
    }
  }

  private resetEvents(): void {
    for (const currentWeek of this.weeks)
    {
      currentWeek.resetEvents();
    }
  }
}
