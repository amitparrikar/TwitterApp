import { Directive, HostListener } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[twtCloseDrawer]'
})
export class CloseDrawerDirective {

    @HostListener('click', ['$event']) click(event){
        $('.mdl-layout__drawer').removeClass('is-visible');
        $('.mdl-layout__obfuscator').removeClass('is-visible');
    }

  constructor() { }

}
