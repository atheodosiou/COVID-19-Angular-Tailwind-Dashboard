import { Component, Input } from '@angular/core';

@Component({
  selector: 'all-stats-widget',
  templateUrl: './all-stats-widget.component.html'
})
export class AllStatsWidgetComponent {
  @Input() all!: any;
}
