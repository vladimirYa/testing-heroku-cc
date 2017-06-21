import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { IndividualComponent } from '../../components/individual/individual.component';
import { IndividualMenuComponent } from '../../components/individual/individual-menu/individual-menu.component';
import { IndividualHeaderComponent } from '../../components/individual/individual-header/individual-header.component';
import { IndividualContentComponent } from '../../components/individual/individual-content/individual-content.component';

import { IndividualUserService } from '../../services/individual/individual-user.service';

import { routerConfig } from './shared/routes'
import { TablePaginationComponent } from '../../components/common/table-pagination/table-pagination.component';
import { FilterPipe } from '../../pipes/sorting/filter.pipe';
import { TableSort } from '../../services/table-sort/table-sort.service';
import { TableFilter } from '../../services/table-sort/table-filter.service';

@NgModule({
    imports: [ CommonModule,
        RouterModule.forChild(routerConfig),
        SharedModule
    ],
    declarations: [
        IndividualComponent,
        IndividualMenuComponent,
        IndividualHeaderComponent,
        IndividualContentComponent,
	    TablePaginationComponent,
        FilterPipe
    ],
    exports: [
        IndividualComponent,
        IndividualMenuComponent,
        IndividualHeaderComponent,
        IndividualContentComponent,
	    TablePaginationComponent,
        FilterPipe,
    ],
    entryComponents:[TablePaginationComponent],
    providers: [IndividualUserService, TableSort, TableFilter]
})

export class IndividualModule{ }
