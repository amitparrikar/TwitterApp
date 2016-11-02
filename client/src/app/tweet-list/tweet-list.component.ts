import { Component, OnInit, Input } from '@angular/core';
import {TwitterService} from "../services/twitter.service";

@Component({
    selector: '[twt-tweet-list]',
    templateUrl: './tweet-list.component.html',
    styleUrls: ['./tweet-list.component.css'],
    providers: [TwitterService]
})
export class TweetListComponent implements OnInit {

    @Input('twt-tweet-list') screenName: string;
    public twitterData: any = [];

    constructor(private twitterService: TwitterService) { }

    ngOnInit() {
        this.twitterData = this.twitterService.getTwitterData(30, this.screenName);
    }
}
