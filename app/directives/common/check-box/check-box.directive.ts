import { Directive, Renderer, ElementRef, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[check-box]',
    host: { '(click)': 'log()' }
})

export class CheckBoxDirective implements OnInit{
    constructor(private renderer: Renderer,
                private elementRef: ElementRef,
                public viewContainerRef: ViewContainerRef){
    }
    public hostElement = this.elementRef.nativeElement;
    ngOnInit(){
        let currentInput = this.hostElement.getElementsByTagName('input')[0];
        let currentLabel = this.hostElement.getElementsByTagName('span')[0];

        // console.log(currentInput, currentLabel);
        if(currentInput.nodeName ==='INPUT' && currentInput.type === 'checkbox'){
            console.log('goodboy');
        }else{
            console.log('fuckYou');
        }
    }
    log(){
        //here will be some handler
        console.log('asd');
    }
}
