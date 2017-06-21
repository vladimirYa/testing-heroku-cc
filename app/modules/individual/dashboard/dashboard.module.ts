import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { IndividualUserService } from '../../../services/individual/individual-user.service';
import { IndividualDashboardComponent } from '../../../components/individual/dashboard/dashboard.component';
import { CommonDataComponent } from '../../../components/individual/common-data/common-data.component';
import { RecentAlertsComponent } from '../../../components/individual/recent-alerts/recent-alerts.component';
import { ChargaScoreScaleComponent } from '../../../components/individual/charga-score-scale/charga-score-scale.component';
// import { FavoriteStoresComponent } from '../../../components/individual/favorite-stores/favorite-stores.component';
import { IncreaseScoreComponent } from '../../../components/individual/increase-score/increase-score.component';
import { routerConfig } from './shared/routes';

@NgModule({
    imports: [ CommonModule,
        RouterModule.forChild(routerConfig),
        SharedModule
    ],
    declarations:[
        IndividualDashboardComponent,
        CommonDataComponent,
        RecentAlertsComponent,
        // FavoriteStoresComponent,
        ChargaScoreScaleComponent,
        IncreaseScoreComponent,
    ],
    exports: [
        IndividualDashboardComponent,
        CommonDataComponent,
        RecentAlertsComponent,
        // FavoriteStoresComponent,
        ChargaScoreScaleComponent,
        IncreaseScoreComponent,
    ],
    providers: [
        IndividualUserService
    ]
})

export class IndividualDashboardModule {

}
