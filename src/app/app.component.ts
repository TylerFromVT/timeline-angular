import {Component, OnInit} from '@angular/core';
import {Timeline} from './timeline';
import {TimelineService} from './timeline.service';
import {TimelineEvent} from './timeline-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  timelineData: any[];
  enabledKeywords: string[];

  constructor(private timelineService: TimelineService) {}

  ngOnInit(): void {
    this.timelineService.getTimeline().subscribe(timelineData => {
      console.log('appComponent.ngOnInit: Timeline data retrieved');
      this.timelineData = timelineData;
    });
  }

  onUpdateToEnabledKeywords(enabledKeywords: Set<string>) {
    console.log('appComponent.onUpdateToEnabledKeywords');
    console.log(enabledKeywords);
    // Note we generate a new array of enabledKeywords so Angular notices it's changed
    this.enabledKeywords = Array.from(enabledKeywords);
  }

  updateEvent(event: TimelineEvent) {
    this.timelineService.update(event).subscribe(timelineData => {
      console.log('onUpdateEvent callback');
      console.log(timelineData);
      this.timelineData = timelineData;
    });
  }

  deleteEvent(event: TimelineEvent) {
    this.timelineService.delete(event).subscribe(timelineData => {
      console.log('onDeleteEvent callback');
      console.log(timelineData);
      this.timelineData = timelineData;
    });
  }
}
