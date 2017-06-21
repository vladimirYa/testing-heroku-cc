import {Component} from '@angular/core'

@Component({
    selector:'fourth-step',
    templateUrl:'./fourth-step.component.html',
    host:{
        'class':'step__wrapper'
    },
    styleUrls:['./fourth-step.component.less']
})

export class FourthStepComponent  {
    nextStep:boolean = false;
    constructor (){}
    checkState(){
        if($('#autoPay').prop('checked') && $('#agreement').prop('checked')){
            this.nextStep=true;
        }
        else this.nextStep=false;
    }
}