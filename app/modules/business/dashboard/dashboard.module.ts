import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { BusinessDashboardComponent } from '../../../components/business/dashboard/dashboard.component';
import { BusinessDashboardItemComponent } from '../../../components/business/dashboard/dashboard-item/dashboard-item.component';
import { BusinessDashboardCustomersComponent } from '../../../components/business/dashboard/customers/customers.component';
import { BusinessDashboardCardsComponent } from '../../../components/business/dashboard/cards/cards.component';
import { BusinessDashboardRecentActivityComponent } from '../../../components/business/dashboard/recent-activity/recent-activity.component';
import { BusinessDashboardCardholdersComponent } from '../../../components/business/dashboard/cards/cardholders/cardholders.component';

import { routerConfig } from './shared/routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routerConfig),
        SharedModule
    ],
    exports: [
        BusinessDashboardComponent,
        BusinessDashboardItemComponent,
        BusinessDashboardCustomersComponent,
        BusinessDashboardCardsComponent,
        BusinessDashboardRecentActivityComponent,
        BusinessDashboardCardholdersComponent
    ],
    declarations: [
        BusinessDashboardComponent,
        BusinessDashboardItemComponent,
        BusinessDashboardCustomersComponent,
        BusinessDashboardCardsComponent,
        BusinessDashboardRecentActivityComponent,
        BusinessDashboardCardholdersComponent
    ]
})

export class BusinessDashboardModule {}
