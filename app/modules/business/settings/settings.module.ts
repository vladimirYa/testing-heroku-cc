import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { BusinessSettingsComponent } from '../../../components/business/settings/settings.component'

import { routerConfig } from './shared/routes';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routerConfig),
        SharedModule
    ],
    declarations: [
        BusinessSettingsComponent
    ],
    exports: [
        BusinessSettingsComponent
    ]
})

export class BusinessSettingsModule {

}
