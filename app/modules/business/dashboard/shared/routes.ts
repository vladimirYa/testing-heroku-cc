import { BusinessDashboardComponent } from '../../../../components/business/dashboard/dashboard.component';
import { BusinessDashboardCustomersComponent } from '../../../../components/business/dashboard/customers/customers.component';
import { BusinessDashboardCardsComponent } from '../../../../components/business/dashboard/cards/cards.component';
import { BusinessDashboardRecentActivityComponent } from '../../../../components/business/dashboard/recent-activity/recent-activity.component';

export const routerConfig = [
    {
        path:'',
        component: BusinessDashboardComponent,
        children: [
            {
                path: 'recent-activity',
                component: BusinessDashboardRecentActivityComponent
            },
            {
                path: 'cards',
                component: BusinessDashboardCardsComponent
            },
            {
                path: 'customers',
                component: BusinessDashboardCustomersComponent
            },
            {
                path: '',
                redirectTo: 'recent-activity',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
