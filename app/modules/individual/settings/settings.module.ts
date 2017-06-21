import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { SettingsComponent } from '../../../components/individual/settings/settings.component';
import { SettingsViewComponent } from '../../../components/individual/settings/view/settings-view.component';
import { routerConfig } from './shared/routes';

import { IndividualUserService } from '../../../services/individual/individual-user.service';

@NgModule({
    imports: [ CommonModule,
        RouterModule.forChild(routerConfig),
        SharedModule
    ],
    declarations:[
        SettingsComponent,
        SettingsViewComponent,
    ],
    exports: [
        SettingsComponent,
        SettingsViewComponent,
    ],
    providers: [
        IndividualUserService
    ]
})

export class IndividualSettingsModule {

}
