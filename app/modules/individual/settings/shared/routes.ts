import { SettingsComponent } from '../../../../components/individual/settings/settings.component';
import { SettingsViewComponent } from '../../../../components/individual/settings/view/settings-view.component';

export const routerConfig = [
    {
        path: '',
        component: SettingsComponent,
        children:[
            {
                path: 'view',
                component: SettingsViewComponent,
            },
            {
                path:'',
                redirectTo: 'view',
                pathMatch: 'full'
            }
        ],
    }
]
