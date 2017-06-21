import { Component } from '@angular/core';

import { ModalService } from '../../../services/modal/modal.service';
import { IndividualUserService } from '../../../services/individual/individual-user.service';

@Component({
    selector: 'individual-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.less']
})

export class IndividualDashboardComponent {
    constructor(private modalService: ModalService,
                private individualUserService: IndividualUserService) { }

    userIndividual = this.individualUserService.getData();
    title = 'Individual dashboard'
}
