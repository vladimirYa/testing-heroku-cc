import { BusinessComponent } from '../../../components/business/business.component';
import { BusinessDashboardComponent } from '../../../components/business/dashboard/dashboard.component';
import { BusinessProfileComponent } from '../../../components/business/profile/profile.component';
import { BusinessProfileViewComponent } from '../../../components/business/profile/profile-view/profile-view.component';
import { BusinessProfileEditableComponent } from '../../../components/business/profile/profile-edit/profile-edit.component';

export const routerConfig = [{
    path: '',
    component: BusinessComponent,
    children: [
            {
                path: 'dashboard',
                loadChildren: '../dashboard/dashboard.module#BusinessDashboardModule',
                data: {
                    title: 'Dashboard'
                }
            },
            {
                path: 'settings',
                loadChildren: '../settings/settings.module#BusinessSettingsModule',
                data: {
                    title: 'Settings'
                }
            },
            {
                path: 'customers',
                loadChildren: '../customers/customers.module#CustomersModule',
                data: {
                    title: 'Customer Dashboard'
                }
             },
             {
                 path: 'profile',
                 component: BusinessProfileComponent,

                 children: [
                     {
                       path: 'view',
                       component: BusinessProfileViewComponent,
                       data:{
                            title: 'Profile'
                       }
                   },
                     {
                         path: 'edit',
                         component: BusinessProfileEditableComponent,
                         data: {
                             title: 'Profile -> Settings'
                         }
                     },

                     { path: '', redirectTo: 'view', pathMatch: 'full' },

                 ]
             },
             {
                 path: 'billing',
                 loadChildren: '../billing-managment/billing-managment.module#BilingManagmentModule'
             },
             {
                 path: 'card',
                 loadChildren: '../card-managment/card-managment.module#CardManagmentModule'
             },
             { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
];
