import { Component, OnInit, Input } from '@angular/core';

import { Response,  } from "@angular/http";

import {TwitterService} from "../services/twitter.service";
import {SharedService} from "../services/shared.service";

@Component({
    selector: '[twt-tweet-list]',
    templateUrl: './tweet-list.component.html',
    styleUrls: ['./tweet-list.component.css'],
    providers: [TwitterService]
})
export class TweetListComponent implements OnInit {

    @Input('twt-tweet-list') screenName: string;
    public twitterData: any = [];

    public appSettings: any;

    constructor(private twitterService: TwitterService, private sharedService: SharedService) { }

    ngOnInit() {

        this.getTweetData();

        this.sharedService.refreshPage.subscribe( data => this.getTweetData());

    }

    getTweetData(){
        this.appSettings = this.sharedService.getAllSettings();

        this.twitterService.getTwitterData(parseInt(this.appSettings.tweetCount)*2, this.screenName).subscribe(
            (data: any) => {
                this.twitterData = data;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }
}
