import { IndividualDashboardComponent } from '../../../../components/individual/dashboard/dashboard.component';

export const routerConfig = [
    {
        path: '',
        component: IndividualDashboardComponent,
    },
    { path: '', redirectTo: 'view', pathMatch: 'full' },
]
