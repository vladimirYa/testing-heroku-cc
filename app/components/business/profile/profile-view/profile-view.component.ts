import { Component } from '@angular/core';
import { BusinessUserService } from '../../../../services/business/business.service';

declare let require;

@Component({
    selector: 'business-profile-view',
    templateUrl: './profile-view.component.html',
    styleUrls: [
                    '../../../individual/profile/profile-view/profile-view.component.less',
               ]
})

export class BusinessProfileViewComponent {
    businessData;
    constructor(private businessService: BusinessUserService) {
        this.businessData = this.businessService.getData();
    }

    loadImg(image){
        return require(`../../../../common/images/${image}.png`);
    }
}
