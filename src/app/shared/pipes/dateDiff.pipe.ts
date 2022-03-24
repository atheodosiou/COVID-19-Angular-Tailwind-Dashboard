import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateDiff'
})
export class DateDiffPipe implements PipeTransform {

  transform(value: number, type: 'min' | 'hours' | 'days'): any {
    if (!type) return value;
    const date = new Date(value);
    const currentDate = new Date();

    if (moment(currentDate).diff(moment(date), 'minutes') < 60) {
      return moment(currentDate).diff(moment(date), 'minutes') + 'm ago';
    }
    if (moment(currentDate).diff(moment(date), 'hours') < 24) {
      return moment(currentDate).diff(moment(date), 'hours') + 'h ago';
    }
    if (moment(currentDate).diff(moment(date), 'days') < 28) {
      return moment(currentDate).diff(moment(date), 'days') + 'd ago';
    }
    return value;
  }

}
