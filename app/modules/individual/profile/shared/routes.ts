import { ProfileComponent } from '../../../../components/individual/profile/profile.component';
import { ProfileEditableComponent } from '../../../../components/individual/profile/profile-editable/profile-editable.component';
import { ProfileViewComponent } from '../../../../components/individual/profile/profile-view/profile-view.component';

export const routerConfig = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            { path: 'view', component: ProfileViewComponent },
            { path: 'edit', component: ProfileEditableComponent },

            { path: '', redirectTo: 'view', pathMatch: 'full' },
        ]
    }
]
