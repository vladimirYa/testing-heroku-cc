import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';

import { CardService } from '../../../services/common/card/card.service';
import { CommonService } from '../../../services/common/common.service';

declare let require;

@Component({
    selector: 'card-managment',
    templateUrl: './card-managment.component.html',
    styleUrls: [
        './card-managment.component.less',
        '../../../common/styles/blocks/input/input.less',
        '../../../common/styles/grid.less',
        '../../../common/styles/blocks/table/table.less'],
    encapsulation: ViewEncapsulation.None
})

export class CardManagmentComponent { }
