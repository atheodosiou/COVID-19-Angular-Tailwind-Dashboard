import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { TableRow } from 'src/app/shared/models/table.model';
import { environment } from 'src/environments/environment';
import { groupBy } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {
  private readonly baseUrl = environment.serverUrl;
  private readonly continentCols: TableRow[] = [
    { header: 'Continent', field: 'continent', type: 'text' },
    { header: 'Countries', field: 'countries', type: 'text' },
    { header: 'Population', field: 'population', type: 'number' },
    { header: 'Active', field: 'active', type: 'number' },
    { header: 'Active Per Million', field: 'activePerOneMillion', type: 'number', style: { 'min-width': '180px' } },
    { header: 'Cases', field: 'cases', type: 'number' },
    { header: 'Cases Per Million', field: 'casesPerOneMillion', type: 'number', style: { 'min-width': '180px' } },
    { header: 'Critical', field: 'critical', type: 'number' },
    { header: 'Critical Per Million', field: 'criticalPerOneMillion', type: 'number', style: { 'min-width': '180px' } },
    { header: 'Deaths', field: 'deaths', type: 'number' },
    { header: 'Deaths Per Million', field: 'deathsPerOneMillion', type: 'number', style: { 'min-width': '180px' } },
    { header: 'Recovered', field: 'recovered', type: 'number' },
    { header: 'Recovered Per Million', field: 'recoveredPerOneMillion', type: 'number', style: { 'min-width': '200px' } },
    { header: 'Test', field: 'tests', type: 'number' },
    { header: 'Tests Per Million', field: 'testsPerOneMillion', type: 'number', style: { 'min-width': '180px' } },
    { header: 'Updated', field: 'updated', type: 'date' }
  ];
  private countryData: any[] = [];

  public get continentColumns() {
    return this.continentCols;
  }

  constructor(private http: HttpClient) { }

  public all(): Observable<any> {
    return this.http.get(`${this.baseUrl}/covid-19/all`);
  }

  public continents(continent?: string): Observable<any[]> {
    const url = continent ? `${this.baseUrl}/covid-19/continents/${continent}?strict=true` : `${this.baseUrl}/covid-19/continents`;
    return this.http.get<any[]>(url);
  }

  public countries(byContinent: boolean = false): Observable<any | any[]> {
    return this.http.get<any>(`${this.baseUrl}/covid-19/countries`).pipe(
      map(data => {
        return byContinent ? groupBy(data, 'continent') : data
      })
    );
  }

  public vaccineCoverage(lastMonth: boolean = true): Observable<any[]> {
    const url = lastMonth ? `${this.baseUrl}/covid-19/vaccine/coverage?lastdays=30&fullData=true` :
      `${this.baseUrl}/covid-19/vaccine/coverage?lastdays=all&fullData=true`;
    return this.http.get<any[]>(url);
  }
}
