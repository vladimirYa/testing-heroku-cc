import { Component } from '@angular/core';

declare let require;

@Component({
    selector: 'settings-view',
    templateUrl: './settings-view.component.html',
    styleUrls: [
        './settings-view.component.less'
    ]
})

export class SettingsViewComponent {
    private isEdit:boolean = false;
    private backUps = [
        {
            bank_id: 0,
            bank_icon: 'bankofamerica',
            card_number: '4000 1234 5678 9123'
        },
        {
            bank_id: 1,
            bank_icon: 'visa',
            card_number: '4170 1234 5678 9010'
        }
    ];
    constructor() { }
    loadImg(path) {
        return require(`../../../../common/images/icons/${path}.png`);
    }
    removeBank(id){
        console.log(id);
    }
    switchToEdit(){
        this.isEdit = !this.isEdit;
    }
}
