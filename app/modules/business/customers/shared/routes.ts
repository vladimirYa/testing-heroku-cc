import { BusinessCustomerComponent } from '../../../../components/business/customer/customer.component';
import { BusinessCustomersComponent } from '../../../../components/business/customers/customers.component';

export const routerConfig = [
    {
        path:'',
        component: BusinessCustomersComponent,
    },
    {
        path: 'customer/:id',
        component: BusinessCustomerComponent,
        data: {
            title: 'Customer Dashboard'
        }
    },
    { path: '', redirectTo: '', pathMatch: 'full' }
]
