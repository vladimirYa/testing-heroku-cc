import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'check-box',
    templateUrl: './check-box.component.html',
    styleUrls: ['./check-box.component.less']
})

export class CheckBoxComponent implements OnInit{
    @Input() modifier:string;
    @Input() checkBoxData;
    @Output() fireChange = new EventEmitter();
    ngOnInit(){

    }
    ngOnDestroy(){

    }
    toggle(checkBoxName){
        this.checkBoxData.isActive = !this.checkBoxData.isActive;

        this.fireChange.emit(this.checkBoxData);
    }
}
