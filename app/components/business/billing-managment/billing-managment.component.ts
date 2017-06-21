import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CardService } from '../../../services/common/card/card.service';
import { CommonService } from '../../../services/common/common.service';

declare let require;

@Component({
    selector: 'business-billing-managment',
    templateUrl: './billing-managment.component.html',
    styleUrls: [
        './billing-managment.component.less',
        '../../../common/styles/blocks/input/input.less',
        '../../../common/styles/grid.less',
        '../../../common/styles/blocks/table/table.less']
})
export class BusinessBillingManagmentComponent implements OnDestroy{
    public aRSub;
    public cardType;
    public componentRoute = '';
    constructor(private cardService: CardService,
                private ar:Router,
                private commonService: CommonService) {
        //fuckdayaroslava
        this.aRSub = ar.events.subscribe((event)=> {
            if(event instanceof NavigationEnd) {
                let currentUrlFragments = event.urlAfterRedirects.split('/');
                this.cardType = currentUrlFragments[currentUrlFragments.length - 1];
                this.componentRoute = this.cardType !== 'main' ? ` -> ${commonService.capitalize(this.cardType)} Card` : '';
            }
        })
    }

    ngOnDestroy(){
        this.aRSub.unsubscribe();
    }

    //from backend
    private netRevenueMtd = {
        date: 'Apr 15 2017',
        value: 23425,
        difference: '2%',
        isIncreased: true
    }
    private lastMonthRevenue = {
        date: 'Apr 15 2017',
        value: 42125,
        difference: '5%',
        isIncreased: true
    }
    private lastYearRevenue = {
        date: 'Apr 15 2017',
        value: 328250,
        difference: '5%',
        isIncreased: true
    }
    private productSoldMtd = {
        date: 'Apr 15 2017',
        value: 236,
        difference: '6%',
        isIncreased: true
    }
    private lastMonthProduct = {
        date: 'Apr 15 2017',
        value: 322,
        difference: '6%',
        isIncreased: true
    }
    private lastYearProduct = {
        date: 'Apr 15 2017',
        value: 2852,
        difference: '6%',
        isIncreased: true
    }
}
