import { Component } from '@angular/core';
import { IndividualUserService } from '../../../../services/individual/individual-user.service';
import { IIndividualUser } from '../../../../services/individual/shared/individual-user.interface';
declare var require: any;

@Component({
    selector: 'individual-profile-view',
    templateUrl: './profile-view.component.html',
    styleUrls: ['./profile-view.component.less']
})

export class ProfileViewComponent {
    userData: IIndividualUser;
    constructor(private individualUserService: IndividualUserService){
        this.userData = individualUserService.getData();
    }
    loadImg(image){
        return require(`../../../../common/images/${image}.png`);
    }
}
