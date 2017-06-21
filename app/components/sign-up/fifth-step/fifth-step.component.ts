import {Component} from '@angular/core';

@Component({
    selector:'fifth-step',
    templateUrl:'./fifth-step.component.html',
    host:{
        'class':'step__wrapper'
    },
    styleUrls:['./fifth-step.component.less']
})

export class FifthStepComponent{
    sources:boolean=false;
    fico:boolean=false;
    social:boolean=false;
    changeRadio(event){
        if(event.target.id=="fundingSource"){this.sources=true}
        else this.sources=false;
        if(event.target.id=="fico"){this.fico=true}
        else this.fico=false;
        if(event.target.id=="facebook"){this.social=true}
        else this.social=false;
    }
}