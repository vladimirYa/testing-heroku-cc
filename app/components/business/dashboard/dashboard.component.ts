import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { customers } from '../customer/shared/customers';

import { cardRequests } from './shared/data';
import { payments } from './shared/data';
import { newCustomers } from './shared/data';
import { transactions } from './shared/data';
import { cardRequestsData } from './shared/data';
import { paymentsData } from './shared/data';
import { newCustomersData } from './shared/data';
import { transactionsData } from './shared/data';

import { CardService } from '../../../services/common/card/card.service';

declare let require;

@Component({
    selector: 'business-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.less',
                '../../../common/styles/blocks/input/input.less',
                '../../../common/styles/grid.less',
                '../../../common/styles/common.less'],
    encapsulation: ViewEncapsulation.None
})
export class BusinessDashboardComponent implements OnInit {

    // constructor(public cardService:CardService) { }
    //
    // public cardRequests = cardRequests;
    // public payments = payments;
    // public newCustomers = newCustomers;
    // public transactions = transactions;
    //
    // public customers = customers;
    //
    ngOnInit(){

    }
    //
    // getData(numberToSlice, sliceTarget){
    //     if(sliceTarget.length === 0){
    //         return false;
    //     }else if(sliceTarget <= numberToSlice){
    //         return sliceTarget;
    //     }else{
    //         return sliceTarget.slice(0, numberToSlice);
    //     }
    // }
    //
    // public cardRequestsData = this.getData(2, cardRequestsData);
    // public paymentsData = this.getData(3, paymentsData);
    // public transactionsData = this.getData(3, transactionsData);
    // public newCustomersData = this.getData(3, newCustomersData);
    //
    // loadFlatCard(cardName){
    //     return require(`../../../common/images/cards/${cardName}.png`)
    // }
}
