import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'business-sign-up',
  templateUrl: './business-sign-up.component.html',
  styleUrls: [
    './business-sign-up.component.less',
    '../../../common/styles/blocks/input/input.less'],
    // encapsulation: ViewEncapsulation.None
})
export class BusinessSignUpComponent implements OnInit {

  constructor() { }
  steps:number = 1;
  data = [];
  ngOnInit() {
  }
  getStep(event){

    this.steps = event.nextStep;
    for(let i = 0;i < this.data.length;i++){

      if(this.data[i].stepNumber === event.stepNumber){
        this.data.splice(i,1);
      }
    }
    this.data.push(event);
    console.log(this.data);
  }
  getStepBack(event){
    
    this.steps = event.prevStep;

  }
}