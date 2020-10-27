class RaidWeekModel {

  private firstDate: Date;
  private lastDate: Date;

  constructor(showDate: Date) {
    this.firstDate = null;
    this.lastDate = null;
  }

  public getFirstDate(): Date {
    return this.firstDate;
  }

  public getLastDate(): Date {
    return this.lastDate;
  }

  public isInRaidWeek(givenDate: Date): boolean {
    var givenDateMoment = moment(givenDate);
    return true;
  }

  private __init(showDate: Date) {

  }
}
