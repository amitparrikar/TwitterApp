import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  constructor() {
      //Set the initial screennames if not present.
      if(!this.getLocalStorageItem('screenNames')){
          window.localStorage.setItem('screenNames', 'appdirect,techrunch,amitparrikar')
      }
  }

    getAllScreenNames(){
        return this.getLocalStorageItem('screenNames').split(',');
    }

    saveAllScreenNames(screenNames: string[]){
        this.saveToLocalStorage('screenNames', screenNames.join(','));
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
}