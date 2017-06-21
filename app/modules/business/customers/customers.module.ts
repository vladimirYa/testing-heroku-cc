import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { CustomerFavoritesComponent } from '../../../components/business/customer/favorites/customer-favorites.component';
import { BusinessCustomersComponent } from '../../../components/business/customers/customers.component';
import { BusinessCustomerComponent } from '../../../components/business/customer/customer.component';
import { CommonComponent } from '../../../components/business/customer/common/common.component';
import { ChatComponent } from '../../../components/business/customer/chat/chat.component';

import { routerConfig } from './shared/routes'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routerConfig),
        SharedModule
    ],
    exports: [
        CustomerFavoritesComponent,
        BusinessCustomersComponent,
        BusinessCustomerComponent,
        CommonComponent,
        ChatComponent
    ],
    declarations: [
        CustomerFavoritesComponent,
        BusinessCustomersComponent,
        BusinessCustomerComponent,
        CommonComponent,
        ChatComponent
    ]
})

export class CustomersModule { }
