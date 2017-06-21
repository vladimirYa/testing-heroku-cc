import { IndividualComponent } from '../../../components/individual/individual.component';

export const routerConfig = [
    {
        path: '',
        component: IndividualComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: '../dashboard/dashboard.module#IndividualDashboardModule',
                data: {
                    title: 'Dashboard'
                }
            },
            {
                path: 'my-charga-cards',
                loadChildren: '../my-charga-cards/my-charga-cards.module#MyChargaCardsModule',
                data: {
                    title: 'My Charga Card'
                }
            },
            {
                path: 'settings',
                loadChildren: '../settings/settings.module#IndividualSettingsModule',
                data: {
                    title: 'Settings'
                }
            },
            {
                path: 'profile',
                loadChildren: '../profile/profile.module#IndividualProfileModule',
                data: {
                    title: 'Profile'
                },

            },

            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]
    },
];
