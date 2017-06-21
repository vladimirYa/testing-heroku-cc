import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'first-step-business',
  templateUrl: './first-step-business.component.html',
  styleUrls: [
                '../business-sign-up.component.less',
                '../../../../common/styles/blocks/input/input.less'
             ]
})
export class FirstStepBusinessComponent implements OnInit {
  @Output() switch = new EventEmitter();
  @Input() private userData;
  @ViewChild('nameInput') nameInputEl: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log('all data in first step');
    console.log(this.userData);
    for(let i = 0;i<this.userData.length; i++){
      // console.log();
      if(this.userData[i].stepNumber === 1){
        this.nameInputEl.nativeElement.value = this.userData[i].userData.name;  
      }
    }
  }
  switchStep(stepData){
    
    this.switch.emit(stepData);
  }
}