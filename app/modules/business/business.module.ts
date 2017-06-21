import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'

import { BusinessComponent } from '../../components/business/business.component';
import { BusinessHeaderComponent } from '../../components/business/business-header/business-header.component';
import { BusinessMenuComponent } from '../../components/business/business-menu/business-menu.component';
import { BusinessContentComponent } from '../../components/business/business-content/business-content.component';
import { BusinessProfileComponent } from '../../components/business/profile/profile.component';
import { BusinessProfileViewComponent } from '../../components/business/profile/profile-view/profile-view.component';
import { BusinessProfileEditableComponent } from '../../components/business/profile/profile-edit/profile-edit.component';

import { BusinessUserService } from '../../services/business/business.service';

import { routerConfig } from './shared/routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routerConfig),
        SharedModule
    ],
    declarations: [
        BusinessComponent,
        BusinessMenuComponent,
        BusinessHeaderComponent,
        BusinessContentComponent,
        BusinessProfileComponent,
        BusinessProfileViewComponent,
        BusinessProfileEditableComponent
    ],
    exports: [
        BusinessComponent,
        BusinessMenuComponent,
        BusinessHeaderComponent,
        BusinessContentComponent,
        BusinessProfileComponent,
        BusinessProfileViewComponent,
        BusinessProfileEditableComponent
    ],
    providers:[ BusinessUserService ]
})

export class BusinessModule{ }
