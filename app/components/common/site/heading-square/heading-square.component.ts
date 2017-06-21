import {Input, Component } from '@angular/core';

@Component({
    selector: 'heading-square',
    templateUrl: './heading-square.component.html',
    styleUrls: ['./heading-square.component.less']
})

export class HeadingSquareComponent {
    @Input() text:string;
    @Input() color:string;
}
