import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SiteComponent } from '../../components/site/site.component';
import { SiteMainComponent } from '../../components/site/site-main/site-main.component';
import { SiteHeaderComponent } from '../../components/site/site-header/site-header.component';
import { SiteFooterComponent } from '../../components/site/site-footer/site-footer.component';
import { AboutComponent } from '../../components/site/about/about.component';
import { ContactUsComponent } from '../../components/site/contact-us/contact-us.component';
import {HomeComponent} from '../../components/site/home/home.component'
import {BusinessComponent} from '../../components/site/business/business.component'
import {HeadingSquareComponent} from "../../components/common/site/heading-square/heading-square.component"
import {FeaturedStoresComponent} from "../../components/common/site/featured-stores/featured-stores.component"
import {CompanyComponent} from "../../components/site/company/company.component"
import {KpiHistoryComponent} from "../../components/common/site/kpi-history/kpi-history.component"
import {MissionComponent} from  "../../components/common/site/mission/mission.component"

import { routerConfig } from './shared/routes'
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule.forChild(routerConfig),
        SharedModule ],
    declarations: [
        SiteComponent,
        SiteMainComponent,
        SiteHeaderComponent,
        SiteFooterComponent,
        AboutComponent,
        ContactUsComponent,
        HomeComponent,
        BusinessComponent,
        HeadingSquareComponent,
        FeaturedStoresComponent,
        CompanyComponent,
        KpiHistoryComponent,
        MissionComponent,
    ],
    exports: [
        SiteComponent,
        SiteMainComponent,
        SiteHeaderComponent,
        SiteFooterComponent,
        AboutComponent,
        ContactUsComponent,
        HomeComponent,
        BusinessComponent,
        HeadingSquareComponent,
        FeaturedStoresComponent,
        CompanyComponent,
        KpiHistoryComponent,
        MissionComponent,
    ],
})

export class SiteModule{ }
