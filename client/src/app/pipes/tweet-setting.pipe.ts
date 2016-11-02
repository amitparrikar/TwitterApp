import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tweetSetting'
})
export class TweetSettingPipe implements PipeTransform {
    transform(value: any, count?: any, dateFrom?: any, dateTo?: any): any {

        let tempArray: any = [];

        if(value){
            value.forEach( (val, indx) => {
                let date = new Date(val.created_at);
                date.setHours(0, 0, 0, 0);
                if(date >= new Date(dateFrom) && date <= new Date(dateTo)){
                    tempArray.push(val);
                }
            });
        }

        return tempArray.slice(0, count);
    }
}
