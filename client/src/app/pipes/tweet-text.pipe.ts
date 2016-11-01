import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tweetText'
})
export class TweetTextPipe implements PipeTransform {

    transform(value: any, args?: any): any {

        return value.replace(/(@[a-zA-Z]+)|(#[a-zA-Z]+)|(https?:\/\/[^\s]+)/gim, function (value) {

            if(value.indexOf('#') > -1){
                return `<a href="https://twitter.com/hashtag/${value.slice(1)}" target="_blank">${value}</a>`;
            }else if(value.indexOf('@') > -1){
                return `<a href="https://twitter.com/${value.slice(1)}" target="_blank">${value}</a>`;
            }else{
                return "";
            }
        });
    }
}
