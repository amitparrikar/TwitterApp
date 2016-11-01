import { Component, OnInit } from '@angular/core';
import {SharedService} from "../services/shared.service";

declare var $:any;

@Component({
  selector: '[twt-app-body]',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css']
})
export class AppBodyComponent implements OnInit {

    private startPosition: number = 0;
    private newPosition: number = 0;

    public screenNames: string[] = [];

    constructor(private sharedService: SharedService) {

    }
    ngOnInit() {

        this.screenNames = this.sharedService.getAllScreenNames();

        $('.flex-container').sortable({
            placeholder: "ui-sortable-placeholder",
            forcePlaceholderSize: true,
            start: (event, ui) => {
                this.startPosition = ui.item.index();
            },
            stop: (event, ui) => {
                this.newPosition = ui.item.index();

                this.rearrangeScreenNames();

                this.saveScreenNamesPosition();
            }
        });
    }

    rearrangeScreenNames(){
        let item1 = this.screenNames[this.startPosition];
        let item2 = this.screenNames[this.newPosition];
        this.screenNames[this.newPosition] = item1;
        this.screenNames[this.startPosition] = item2;
    }

    saveScreenNamesPosition(){
        this.sharedService.saveAllScreenNames(this.screenNames);
    }

}
