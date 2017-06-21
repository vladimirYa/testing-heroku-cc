import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavigationRowComponent } from '../../components/common/navigation-row/navigation-row.component';
import { RecentActivityComponent } from '../../components/individual/recent-activity/recent-activity.component';
import { ModalWindowComponent } from '../../components/common/modal-window/modal-window.component';
import { SelectComponent } from '../../components/common/select/select.component';
import { CheckBoxComponent } from '../../components/common/check-box/check-box.component';
import { DataSectorComponent } from '../../components/common/data-sector/data-sector.component';
import { ModalService } from '../../services/modal/modal.service'
import { CardService } from '../../services/common/card/card.service';
import { ChartsService } from '../../services/common/charts/charts.service';
import { CommonService } from '../../services/common/common.service';
import { CapitalizePipe } from '../../pipes/capitalize/capitalize.pipe';
import { ScoreScaleComponent } from '../../components/individual/charga-score-scale/scale/scale.component';
import { FavoriteStoresComponent } from '../../components/individual/favorite-stores/favorite-stores.component';
import { ScoreLineComponent } from '../../components/common/score-line/score-line.component';
import {AdDirective} from '../../directives/ad.directive'
// import { CheckBoxDirective } from '../../directives/common/check-box/check-box.directive';

@NgModule({
    imports:[ CommonModule, FormsModule, HttpModule ],
    declarations: [
        NavigationRowComponent,
        RecentActivityComponent,
        ModalWindowComponent,
        SelectComponent,
        CapitalizePipe,
        CheckBoxComponent,
        DataSectorComponent,
        ScoreScaleComponent,
        FavoriteStoresComponent,
        ScoreLineComponent,
	    AdDirective
    ],
    exports: [
        NavigationRowComponent,
        RecentActivityComponent,
        ModalWindowComponent,
        SelectComponent,
        CapitalizePipe,
        FormsModule,
        HttpModule,
        CheckBoxComponent,
        DataSectorComponent,
        ScoreScaleComponent,
        FavoriteStoresComponent,
        ScoreLineComponent,
	AdDirective
    ],
    providers:[ ModalService,
                CardService,
                ChartsService,
                CommonService ]
})

export class SharedModule { }
