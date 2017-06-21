import { Component, AfterViewInit } from '@angular/core';
import { IndividualUserService } from '../../../services/individual/individual-user.service';

@Component({
    selector: 'common-data',
    templateUrl: './common-data.component.html',
    styleUrls: ['./common-data.component.less']
})

export class CommonDataComponent implements AfterViewInit {
    constructor(private individualUserService: IndividualUserService) { }
    individualData;

    ngAfterViewInit(){
        this.individualData = this.individualUserService.getData();
    }
}
