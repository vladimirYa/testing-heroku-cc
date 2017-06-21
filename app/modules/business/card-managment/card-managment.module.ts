import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { CardManagmentComponent } from '../../../components/business/card-managment/card-managment.component';
import { CardMainComponent } from '../../../components/business/card-managment/main/card-main.component';
import { CardDetailsComponent } from '../../../components/business/card-managment/card/card-details.component';

import { routerConfig } from './shared/routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routerConfig),
        SharedModule
    ],
    declarations: [
        CardManagmentComponent,
        CardDetailsComponent,
        CardMainComponent
    ],
    exports: [
        CardManagmentComponent,
        CardDetailsComponent,
        CardMainComponent
    ]
})

export class CardManagmentModule { }
