import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'second-step-business',
  templateUrl: './second-step-business.component.html',
  styleUrls: [
                '../business-sign-up.component.less',
                './second-step-business.component.less',
                '../../../../common/styles/blocks/input/input.less'
             ]
})
export class SecondStepBusinessComponent implements OnInit {
  @Output() switch = new EventEmitter();
  @Output() switchBack = new EventEmitter();
  @Input() private userData;
  constructor() { }

  ngOnInit() {
    console.log('all data in second step');
    console.log(this.userData);
  }
  switchStep(stepData){
    this.switch.emit(stepData);
  }
  switchStepBack(stepData){
    // let data = {

    // }
    this.switchBack.emit(stepData);
  }
}