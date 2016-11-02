import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      let date: any = new Date(value).toString().split(' ');
      let time: any = new Date(value).toTimeString().split(':');

      return `${date[2]}-${date[1]}-${date[3]-2000} at ${time[0]}:${time[1]}`;
  }

}
