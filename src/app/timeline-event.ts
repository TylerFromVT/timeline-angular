import { TimelineDate } from './timeline-date';

export class TimelineEvent {

  constructor(x) {
    console.debug('TimelineEvent Constructor');
    console.debug('\tDescription: ' + x.description);

    this.title = x.title;
    this.details = x.details;
    this.keywords = x.keywords;
    this.date = new TimelineDate(x.date);
  }

  date: TimelineDate;
  title: string;
  details: string
  keywords: string[];

  toString() {
    return this.date.toString();
  }

}