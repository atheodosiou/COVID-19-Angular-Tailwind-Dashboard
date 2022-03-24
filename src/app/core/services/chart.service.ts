import { Injectable } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private readonly baseConfig = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };

  public get continentChartOptions(): ChartConfiguration['options'] {
    return this.baseConfig;
  }

  public get vaccineChartOptions(): ChartConfiguration['options'] {
    return this.baseConfig;
  }

  public createContinentsChartData(data: any): ChartConfiguration['data'] {
    const indexNAmerica = data.indexOf(data.find((x: any) => x.continent === 'North America'));
    const indexAsia = data.indexOf(data.find((x: any) => x.continent === 'Asia'));
    const indexSAmerica = data.indexOf(data.find((x: any) => x.continent === 'South America'));
    const indexEurope = data.indexOf(data.find((x: any) => x.continent === 'Europe'));
    const indexAustrOceania = data.indexOf(data.find((x: any) => x.continent === 'Australia-Oceania'));
    const indexAfrica = data.indexOf(data.find((x: any) => x.continent === 'Africa'));
    const config = {
      labels: data.map((x: any) => x.continent),
      datasets: [
        {
          data: [data[indexNAmerica].cases, data[indexAsia].cases, data[indexSAmerica].cases, data[indexEurope].cases, data[indexAustrOceania].cases, data[indexAfrica].cases],
          label: 'Cases',
          backgroundColor: '#3b82f6',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointHoverBackgroundColor: '#fff',
        },
        {
          data: [data[indexNAmerica].active, data[indexAsia].active, data[indexSAmerica].active, data[indexEurope].active, data[indexAustrOceania].active, data[indexAfrica].active],
          label: 'Active',
          backgroundColor: '#22c55e',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointHoverBackgroundColor: '#fff',
        },
        {
          data: [data[indexNAmerica].critical, data[indexAsia].critical, data[indexSAmerica].critical, data[indexEurope].critical, data[indexAustrOceania].critical, data[indexAfrica].critical],
          label: 'Critical',
          backgroundColor: '#f97316',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointHoverBackgroundColor: '#fff',
        },
        {
          data: [data[indexNAmerica].deaths, data[indexAsia].deaths, data[indexSAmerica].deaths, data[indexEurope].deaths, data[indexAustrOceania].deaths, data[indexAfrica].deaths],
          label: 'Deaths',
          backgroundColor: '#ef4444',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointHoverBackgroundColor: '#fff',
        },
        {
          data: [data[indexNAmerica].recovered, data[indexAsia].recovered, data[indexSAmerica].recovered, data[indexEurope].recovered, data[indexAustrOceania].recovered, data[indexAfrica].recovered],
          label: 'Recovered',
          backgroundColor: '#06b6d4',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointHoverBackgroundColor: '#fff',
          fill: 'origin',
        },
        {
          data: [data[indexNAmerica].tests, data[indexAsia].tests, data[indexSAmerica].tests, data[indexEurope].tests, data[indexAustrOceania].tests, data[indexAfrica].tests],
          label: 'Tests',
          backgroundColor: '#6366f1',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointHoverBackgroundColor: '#fff',
          fill: 'origin',
        }]
    };
    return config;
  }

  public createVaccineCoverageChartData(data: any): ChartConfiguration['data'] {
    return {
      labels: data.map((x: any) => x.date),
      datasets: [
        {
          data: data.map((x: any) => x.daily),
          label: 'Daily',
          backgroundColor: '#3b82f6',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointHoverBackgroundColor: '#fff',
          borderColor:'#3b82f6',
          fill:'rgba(#3b82f6,0.5)'
        },
        {
          data: data.map((x: any) => x.dailyPerMillion),
          label: 'Daily per million',
          backgroundColor: '#22c55e',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointHoverBackgroundColor: '#fff',
          borderColor:'#22c55e'
        },
        {
          data: data.map((x: any) => x.total),
          label: 'Total',
          backgroundColor: '#f97316',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointHoverBackgroundColor: '#fff',
          borderColor:'#f97316'
        },
        {
          data: data.map((x: any) => x.totalPerHundred),
          label: 'Total per hundred',
          backgroundColor: '#6366f1',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointHoverBackgroundColor: '#fff',
          borderColor:'#6366f1'
        }
      ]
    }
  }
}

