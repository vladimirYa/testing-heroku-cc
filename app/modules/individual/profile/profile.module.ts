import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { IndividualUserService } from '../../../services/individual/individual-user.service';
import { ProfileComponent } from '../../../components/individual/profile/profile.component';
import { ProfileEditableComponent } from '../../../components/individual/profile/profile-editable/profile-editable.component';
import { ProfileViewComponent } from '../../../components/individual/profile/profile-view/profile-view.component';
import { routerConfig } from './shared/routes';

@NgModule({
    imports: [ CommonModule,
        RouterModule.forChild(routerConfig),
        SharedModule
    ],
    declarations:[
        ProfileComponent,
        ProfileEditableComponent,
        ProfileViewComponent
    ],
    exports: [
        ProfileComponent,
        ProfileEditableComponent,
        ProfileViewComponent
    ],
    providers: [
        IndividualUserService
    ]
})

export class IndividualProfileModule {

}
