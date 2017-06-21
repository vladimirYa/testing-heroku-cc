import { Component } from '@angular/core';
import { businessMenuLinks } from './shared/data';

import { BusinessUserService } from '../../../services/business/business.service';

declare var require: any;

@Component({
    selector: 'business-menu',
    templateUrl: './business-menu.component.html',
    styleUrls: ['./business-menu.component.less', '../../../common/styles/cabinet-menu/cabinet-menu.less']
})

export class BusinessMenuComponent {
    menuItems = businessMenuLinks;
    constructor(private businessUserService :BusinessUserService) { }
    businessUser = this.businessUserService.getData();
    loadImg(image){
        return require(`../../../common/images/cabinet-menu/${image}.png`);
    }
}
