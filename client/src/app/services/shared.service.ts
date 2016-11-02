import { Injectable, EventEmitter, Input, Output } from '@angular/core';

@Injectable()
export class SharedService {

    @Output()
    refreshPage = new EventEmitter();

    constructor() {
        //Set the initial screennames if not present.
        if(!this.getLocalStorageItem('screenNames')){
            this.saveAllScreenNames(["appdirect", "techcrunch", "laughingsquid"])
        }

        if(!this.getLocalStorageItem('settings')){
            this.saveAllSettings({tweetCount: 20, dateFrom: "", dateTo: "", theme: "indigo-pink.min.css"});
        }
    }

    getAllScreenNames(){
        return this.getLocalStorageItem('screenNames').split(',');
    }

    saveAllScreenNames(screenNames: string[]){
        this.saveToLocalStorage('screenNames', screenNames.join(','));
        this.refreshApplication();
    }

    getAllSettings(){
        return JSON.parse(this.getLocalStorageItem('settings'));
    }

    saveAllSettings(settings: any){
        this.saveToLocalStorage('settings', JSON.stringify(settings));
        this.refreshApplication();
    }

    /**
     * Save the value against the key in the localstorage
     * @param key
     * @param value
     */
    saveToLocalStorage(key:string, value: string){
        if(window.localStorage){
            window.localStorage.setItem(key, value);
        }else{
            console.warn('Your browser does not support localStorage feature');
        }
    }

    /**
     * Get local storage item value for a given key
     * @param key
     * @returns {string|null|any}
     */
    getLocalStorageItem(key: string){
        if(window.localStorage){
            return window.localStorage.getItem(key);
        }else{
            console.warn('Your browser does not support localStorage feature');
        }

        return "";
    }

    /**
     * Refresh the application. emit the the event so that the application refreshes itself.
     */
    refreshApplication(){
        this.refreshPage.emit(true);
    }
}