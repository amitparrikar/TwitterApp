import { Component, OnInit } from '@angular/core';

import {ThemeSelectorService} from "./services/theme-selector.service";
import {SharedService} from "./services/shared.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ThemeSelectorService]
})
export class AppComponent implements OnInit{

    settings: any;

constructor(private themeSelectorService: ThemeSelectorService, private sharedService: SharedService){
}

    ngOnInit(){
        this.settings = this.sharedService.getAllSettings();

        this.themeSelectorService.setTheme(this.settings.theme);
    }
  
}
