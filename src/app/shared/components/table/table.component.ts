import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ThemeService, ThemeType } from 'src/app/core/services/theme.service';
import { TableRow } from '../../models/table.model';

@Component({
  selector: 'table-widget',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnDestroy {

  @Input() columns!: TableRow[];
  @Input() data!: any[];
  theme: ThemeType='dark';
  private readonly destroyed$: Subject<void> = new Subject<void>();

  constructor(private themeService: ThemeService) {
    const observer = (value: ThemeType, error?: any) => this.theme = value;
    this.themeService.onChange.pipe(takeUntil(this.destroyed$)).subscribe(observer);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }
}
