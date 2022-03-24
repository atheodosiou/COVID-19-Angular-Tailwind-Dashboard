import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgChartsModule } from "ng2-charts";
import { LineChartComponent } from "./components/charts/chart/chart.component";
import { TableComponent } from "./components/table/table.component";
import { DateDiffPipe } from "./pipes/dateDiff.pipe";

const shared = [
  TableComponent,
  DateDiffPipe,
  LineChartComponent
];

@NgModule({
  declarations: [...shared],
  imports: [CommonModule,NgChartsModule],
  exports: [...shared]
})
export class SharedModule { }
