import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { individualMenuLinks } from './shared/data';
import { IndividualUserService } from '../../../services/individual/individual-user.service';
import { IIndividualUser } from '../../../services/individual/shared/individual-user.interface';
declare var require: any;

@Component({
    selector: 'individual-menu',
    templateUrl: './individual-menu.component.html',
    styleUrls: ['./individual-menu.component.less', '../../../common/styles/cabinet-menu/cabinet-menu.less']
})

export class IndividualMenuComponent{

    constructor(private individualUserService: IndividualUserService){
        this.userData = this.individualUserService.getData();
    }

    userData: IIndividualUser;

    menuItems = individualMenuLinks;

    loadImg(image){
        return require(`../../../common/images/cabinet-menu/${image}.png`);
    }
}
