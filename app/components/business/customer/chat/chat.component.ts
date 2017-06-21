import { Component, Input } from '@angular/core';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.less']
})

export class ChatComponent {

    @Input() individualData;
    @Input() businessData;

    // ngOnInit(){
    //     console.log(this.individualData);
    //     console.log(this.businessData);
    // }
}
