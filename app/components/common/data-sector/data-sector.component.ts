import { Component, Input, ViewEncapsulation } from '@angular/core';

import { IData } from './shared/data.model';

@Component({
    selector: 'data-sector',
    templateUrl: './data-sector.component.html',
    styleUrls: ['./data-sector.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class DataSectorComponent {
    @Input() private heading: string;
    @Input() private data:IData;
    @Input() private isValueCurrency:boolean = false;
}
