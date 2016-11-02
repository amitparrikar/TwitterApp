import { Component, OnInit } from '@angular/core';
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'twt-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrls: ['./header-dropdown.component.css']
})
export class HeaderDropdownComponent implements OnInit {

    screenNames: string[] = [];

    constructor(private sharedService: SharedService) { }

    ngOnInit() {

        this.refreshComponent();

        this.sharedService.refreshPage.subscribe( data => this.refreshComponent());
    }

    refreshComponent(){
        this.screenNames = this.sharedService.getAllScreenNames();
    }
}
