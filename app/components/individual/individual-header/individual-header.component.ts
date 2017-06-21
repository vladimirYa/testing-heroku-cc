import { Component } from '@angular/core';

import { IndividualUserService } from '../../../services/individual/individual-user.service';
import { IIndividualUser } from '../../../services/individual/shared/individual-user.interface';

@Component({
    selector: 'individual-header',
    templateUrl: './individual-header.component.html',
    styleUrls: ['./individual-header.component.less','../../../common/styles/cabinet-header/cabinet-header.less']
})

export class IndividualHeaderComponent {
    userData: IIndividualUser;
    constructor(private individualUserService: IndividualUserService ){
        this.userData = this.individualUserService.getData();
    }
}
