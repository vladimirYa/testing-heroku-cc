import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { routerConfig } from './shared/routes';

import { BusinessBillingManagmentComponent } from '../../../components/business/billing-managment/billing-managment.component';
import { BusinessBillingCardDetailsComponent } from '../../../components/business/billing-managment/сard/card-details.component';
import { BillingStackBarComponent } from '../../../components/business/billing-managment/stack-bar-billing/stack-bar-billing.component';
import { DonutComponent } from '../../../components/business/billing-managment/donut/donut.component';
import { BillinigMainComponent } from '../../../components/business/billing-managment/main/billing-main.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routerConfig),
        SharedModule
    ],
    exports:[
        BusinessBillingManagmentComponent,
        BusinessBillingCardDetailsComponent,
        BillingStackBarComponent,
        BillinigMainComponent,
        DonutComponent
    ],
    declarations: [
        BusinessBillingManagmentComponent,
        BusinessBillingCardDetailsComponent,
        BillingStackBarComponent,
        BillinigMainComponent,
        DonutComponent
    ]
})

export class BilingManagmentModule { }
