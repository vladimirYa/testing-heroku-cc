import { Component } from '@angular/core';
import { customers } from '../../customer/shared/customers';

import { cardRequests } from '../shared/data';
import { payments } from '../shared/data';
import { newCustomers } from '../shared/data';
import { transactions } from '../shared/data';
import { cardRequestsData } from '../shared/data';
import { paymentsData } from '../shared/data';
import { newCustomersData } from '../shared/data';
import { transactionsData } from '../shared/data';

import { CardService } from '../../../../services/common/card/card.service';
import { ModalService } from '../../../../services/modal/modal.service';

declare let require;

@Component({
    selector: 'dashboard-recent-activity',
    templateUrl: './recent-activity.component.html',
    styleUrls: [
        './recent-activity.component.less',
        '../../../../common/styles/blocks/input/input.less',
        '../../../../common/styles/grid.less',
        '../../../../common/styles/common.less',
        '../../../../common/styles/blocks/table/table.less'
    ]
})

export class BusinessDashboardRecentActivityComponent {
    constructor(public cardService: CardService,
                public modalService: ModalService) { }

    public cardRequests = cardRequests;
    public payments = payments;
    public newCustomers = newCustomers;
    public transactions = transactions;

    public customers = customers;

    getData(numberToSlice, sliceTarget) {
        if (sliceTarget.length === 0) {
            return false;
        } else if (sliceTarget <= numberToSlice) {
            return sliceTarget;
        } else {
            return sliceTarget.slice(0, numberToSlice);
        }
    }
    public paymentsDataFull = paymentsData;
    public transactionsDataFull = transactionsData;
    public newCustomersDataFull = newCustomersData;
    public cardRequestsData = this.getData(2, cardRequestsData);
    public paymentsData = this.getData(3, this.paymentsDataFull);
    public transactionsData = this.getData(3, this.transactionsDataFull);
    public newCustomersData = this.getData(3, this.newCustomersDataFull);

    public refundItemData;
    handleRefund(transactionId){
        for(let i = 0; i < transactionsData.length; i++){
            if(transactionsData[i].transaction_id === transactionId){
                this.refundItemData = transactionsData[i];
            }
        }
        this.modalService.switch('view-more-transactions', 'refund');
    }
    loadPaymentImage(paymentImageName){
        return require(`../../../../common/images/icons/${paymentImageName}.png`)
    }
    loadFlatCard(cardName) {
        return require(`../../../../common/images/cards/${cardName}.png`)
    }
    loadProduct(productPath){
        return require(`../../../../common/images/stuff/${productPath}.png`);
    }
}
