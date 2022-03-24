import { Component, Input } from '@angular/core';

@Component({
  selector: 'today-stats-widget',
  templateUrl: './today-stats-widget.component.html'
})
export class TodayStatsWidgetComponent {
  @Input() all!: any;
}
