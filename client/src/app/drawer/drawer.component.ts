import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SharedService} from "../services/shared.service";
import {ThemeSelectorService} from "../services/theme-selector.service";

declare var $: any;

@Component({
    selector: '[twt-drawer]',
    templateUrl: './drawer.component.html',
    styleUrls: ['./drawer.component.css'],
    providers: [ThemeSelectorService]
})
export class DrawerComponent implements OnInit {

    private screenNames: string[] = [];

    public settings: any = {
        tweetCount: 20,
        dateFrom: "",
        dateTo: "",
        theme: 'indigo-pink.min.css'
    };

    constructor(private sharedService: SharedService, private themeSelectorService: ThemeSelectorService) { }

    ngOnInit() {

        this.loadSettings();

        $("#dateFrom").datepicker({
            onSelect: (date) => {
                this.settings.dateFrom = date;
            }
        });

        $("#dateTo").datepicker({
            onSelect: (date) => {
                this.settings.dateTo = date;
            },
            maxDate: new Date()
        });
    }

    loadSettings(){
        let settings = this.sharedService.getAllSettings();
        this.screenNames = this.sharedService.getAllScreenNames();

        this.settings.dateFrom = new Date();
        this.settings.dateFrom.setMonth(this.settings.dateFrom.getMonth() - 1);
        this.settings.dateFrom = this.settings.dateFrom.toLocaleDateString('en-US');
        this.settings.dateTo = (new Date()).toLocaleDateString('en-US');

        if(settings.dateFrom){
            this.settings.dateFrom = settings.dateFrom;
        }
        if(settings.dateTo){
            this.settings.dateTo = settings.dateTo;
        }
        if(settings.tweetCount){
            this.settings.tweetCount = settings.tweetCount;
        }
        if(settings.theme){
            this.settings.theme = settings.theme;
        }
    }

    removeScreenName(itemIndex){
        this.screenNames.splice(itemIndex, 1);
        this.sharedService.saveAllScreenNames(this.screenNames);
    }

    addScreenName(event, screenName){

        if(this.screenNames.indexOf(screenName) === -1){
            this.screenNames.push(screenName);
            this.sharedService.saveAllScreenNames(this.screenNames);
        }
        event.preventDefault();
    }

    onSubmit(form: NgForm){
        this.sharedService.saveAllSettings(form.value);

        this.loadTheme();
    }

    loadTheme(){

        this.themeSelectorService.setTheme(this.settings.theme);
        window.location.href = window.location.origin;
    }
}
