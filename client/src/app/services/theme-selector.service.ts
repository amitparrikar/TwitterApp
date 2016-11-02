import { Injectable } from '@angular/core';

@Injectable()
export class ThemeSelectorService {

  constructor() { }

    setTheme(themeName: string){

        var loadedFile = document.getElementById('materialCss');

        var head  = document.getElementsByTagName('head')[0];
        if(loadedFile){
            head.removeChild(loadedFile);
        }

        var link  = document.createElement('link');
        link.id   = 'materialCss';
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = `./../assets/css/material.${themeName}`;
        link.media = 'all';
        head.appendChild(link);

    }
}
