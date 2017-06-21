import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { MyChargaCardsComponent } from '../../../components/individual/my-charga-cards/my-charga-cards.component';

import { IndividualUserService } from '../../../services/individual/individual-user.service';
import { routerConfig } from './shared/routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routerConfig),
        SharedModule
    ],
    declarations:[
        MyChargaCardsComponent
    ],
    exports: [
        MyChargaCardsComponent
    ],
    providers: [
        IndividualUserService
    ]
})

export class MyChargaCardsModule {

}
