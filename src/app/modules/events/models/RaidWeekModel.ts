import {Moment} from 'moment';
import * as moment from 'moment';

export class RaidWeekModel {

  private firstDate: Moment;
  private lastDate: Moment;

  constructor(showDate: Moment) {
    this.firstDate = null;
    this.lastDate = null;

    this.__init(showDate.clone());
  }

  public getFirstDate(): Moment {
    return this.firstDate;
  }

  public getLastDate(): Moment {
    return this.lastDate;
  }

  public isInRaidWeek(givenDate: Moment): boolean {
    const givenMoment = moment(givenDate);

    return (this.firstDate.isSame(givenMoment, 'day')
      || this.lastDate.isSame(givenMoment, 'day')
      || givenMoment.isBetween(this.firstDate, this.lastDate, 'day')
    );
  }

  private __init(showDate: Moment) {
    let deltaToStart = 0;
    let deltaToEnd = 0;

    const isoWeekday = showDate.isoWeekday();

    switch (isoWeekday)
    {
      case 1: // Monday
        deltaToStart = 5;
        deltaToEnd   = 1;
        break;
      case 2: // Tuesday (= end of raid week)
        deltaToStart = 6;
        deltaToEnd   = 0;
        break;
      case 3: // Wednesday (= start of raid week)
        deltaToStart = 0;
        deltaToEnd   = 6;
        break;
      case 4: // Thursday
        deltaToStart = 1;
        deltaToEnd   = 5;
        break;
      case 5: // Friday
        deltaToStart = 2;
        deltaToEnd   = 4;
        break;
      case 6: // Saturday
        deltaToStart = 3;
        deltaToEnd   = 3;
        break;
      case 7: // Sunday
        deltaToStart = 4;
        deltaToEnd   = 2;
        break;
    }

    this.firstDate = showDate.clone();
    this.firstDate.subtract(deltaToStart, 'day');

    this.lastDate = showDate.clone();
    this.lastDate.add(deltaToEnd, 'day');
  }
}
