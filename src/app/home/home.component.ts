import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { Subject, takeUntil } from 'rxjs';
import { ChartService } from '../core/services/chart.service';
import { DiseaseService } from '../core/services/disease.service';
import { TableRow } from '../shared/models/table.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  all: any;
  continents!: any[];
  continentsCols: TableRow[] = [];
  countries: any;
  destroyed$: Subject<void> = new Subject<void>();

  continentsConfig!: ChartConfiguration['data'];
  continentsChartOptions: ChartConfiguration['options'];

  vaccineDosesConfig!: ChartConfiguration['data'];
  vaccineDosesChartOptions: ChartConfiguration['options'];


  constructor(private diseaseService: DiseaseService, private chartService: ChartService) {
    this.continentsCols = this.diseaseService.continentColumns;
    this.continentsChartOptions = this.chartService.continentChartOptions;
    this.vaccineDosesChartOptions = this.chartService.vaccineChartOptions;
  }

  ngOnInit() {
    const observerAll = (value: any, error?: any) => { this.all = value; console.log(value) };
    const observerContinents = (value: any, error?: any) => {
      this.continents = value;
      this.continentsConfig = this.chartService.createContinentsChartData(value);
    };
    const observerCountries = (value: any, error?: any) => {
      this.countries = value; console.log("Countries Data:", value);
    };
    const observerVaccineCoverate = (value: any[], error?: any) => {
      console.log("Vaccine Data:", value);
      this.vaccineDosesConfig = this.chartService.createVaccineCoverageChartData(value);
    };

    this.diseaseService.all().pipe(takeUntil(this.destroyed$)).subscribe(observerAll);
    this.diseaseService.continents().pipe(takeUntil(this.destroyed$)).subscribe(observerContinents);
    this.diseaseService.countries(true).pipe(takeUntil(this.destroyed$)).subscribe(observerCountries);
    this.diseaseService.vaccineCoverage(true).pipe(takeUntil(this.destroyed$)).subscribe(observerVaccineCoverate);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
