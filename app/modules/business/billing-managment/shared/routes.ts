import { BusinessBillingManagmentComponent } from '../../../../components/business/billing-managment/billing-managment.component';
import { BusinessBillingCardDetailsComponent } from '../../../../components/business/billing-managment/сard/card-details.component';
import { BillinigMainComponent } from '../../../../components/business/billing-managment/main/billing-main.component';

export const routerConfig = [
    {
        path: '',
        component: BusinessBillingManagmentComponent,
        children: [
            {
                path: 'main',
                component: BillinigMainComponent
            },
            {
                path: ':type',
                component: BusinessBillingCardDetailsComponent,
            },
            {
                path: '',
                redirectTo: 'main',
                pathMatch: 'full'
            }
        ]
    },
]
