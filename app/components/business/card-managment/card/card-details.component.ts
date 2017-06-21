import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardService } from '../../../../services/common/card/card.service';
import { CommonService } from '../../../../services/common/common.service';
import { interestIncomeData } from '../../dashboard/customers/shared/charts-data';
import { ChartsService } from '../../../../services/common/charts/charts.service';

import { data } from '../main/shared/data';

declare let require;
declare let Plotly;

@Component({
    selector: 'card-details',
    templateUrl: './card-details.component.html',
    styleUrls: [
        './card-details.component.less',
        '../../../../common/styles/blocks/input/input.less',
        '../../../../common/styles/grid.less',
        '../../../../common/styles/blocks/table/table.less',
        '../../../common/data-sector/data-sector.component.less']
})

export class CardDetailsComponent {
    private sub;
    private cardType;
    private score;
    private transactions;
    constructor (private activatedRoute: ActivatedRoute,
                 private commonService: CommonService,
                 private cardService: CardService,
                 private chartsService:ChartsService) { }
    private totalCards = {
         date: '1 Apr 2017',
         value: 75,
         difference: '2%',
         isIncreased: true
    }
    private totalChargaCredits = {
        date: '1 Apr 2017',
        value: 25000,
        difference: '3%',
        isIncreased: true
    }
    private creditsUsed = {
        date: '1 Apr 2017',
        value: 21450,
        difference: '4%',
        isIncreased: false
    }
    private creditsAvailable = {
        date: '1 Apr 2017',
        value: 3550,
        difference: '5%',
        isIncreased: true
    }
    private interestRate = {
        date: 'Annual',
        value: '5.26%',
        difference: '25%',
        isIncreased: true
    }
    private interestIncome = {
        date: '1 year',
        value: 1052.98,
        difference: '5%',
        isIncreased: true
    }
    private cardChartSelectNumbers;
    private cardChartSelectDates;
    private data = data;
    private currentCard;
    private currentCardData;
    private gd;
    private xrange = ['Jan`16', 'Dec`16'];
    private layout = {
        showlegend: false,
        margin: {
            l: 50,
            t: 30,
            r: 30,
            b: 30
        },
        font: {
            size: 14
        },
        bargap: 0.4, // how to create it adaptive?

        yaxis: {
            tickprefix: '$'
        }
    }
    private trace
    ngOnInit(){

        this.sub = this.activatedRoute.params.subscribe(params => {
            this.cardType = params['type'];
            // this.currentCardData = this.data.filter((item)=>item.type === this.cardType);
            this.data.forEach((item) => {
            if (this.cardType === item.type) {
                this.currentCardData = item;
            }
        });
            this.currentCard = this.cardService.cardByType(this.currentCardData.type);
        });
       
        this.score = this.cardService.cardByType(this.cardType).breakpoint;
        
        let x = this.currentCardData.x.map((dateFormat) => {
            return this.chartsService.formatToDate(dateFormat)
        });
        this.trace = [{
            x,
            y: this.currentCardData.y,
            type: 'bar',
            name: this.chartsService.capitalize(this.currentCard.title) + ' Card',
            marker: {
                color: this.currentCard.cardColor
            },
        }]
        this.gd = this.chartsService.initFluidLayout('#chart', 98, 100);
        Plotly.plot(this.gd, this.trace, this.layout, { displayModeBar: false });
        
        this.cardChartSelectNumbers = {
            active: {
                id: 'number-of-card',
                text: '№ of card'
            },
            options: [
                {
                    id: 'number-of-card',
                    text: '№ of card'
                }
            ]
        }
        this.cardChartSelectDates = {
            active: {
                id: 'annual',
                text: 'Annual'
            },
            options: [
                {
                    id: 'annual',
                    text: 'Annual'
                }
            ]
        }
        this.transactions = [
            {
                user_id: 0,
                full_name: 'Kathy Douglas',
                score: 748,
                credit_limit: 400,
                credit_used: 225,
                credit_available: 175,
                interest_rate: 5.01
            },
            {
                user_id: 0,
                full_name: 'Ralph Parker',
                score: 746,
                credit_limit: 390,
                credit_used: 300,
                credit_available: 90,
                interest_rate: 5.09
            },
            {
                user_id: 0,
                full_name: 'Lori Wong',
                score: 732,
                credit_limit: 380,
                credit_used: 375,
                credit_available: 5,
                interest_rate: 5.15
            },
            {
                user_id: 0,
                full_name: 'Arthur Newman',
                score: 730,
                credit_limit: 380,
                credit_used: 211,
                credit_available: 169,
                interest_rate: 5.22
            },
            {
                user_id: 0,
                full_name: 'Ann Smith',
                score: 729,
                credit_limit: 370,
                credit_used: 105,
                credit_available: 265,
                interest_rate: 5.24
            },
            {
                user_id: 0,
                full_name: 'Carl West',
                score: 725,
                credit_limit: 370,
                credit_used: 350,
                credit_available: 20,
                interest_rate: 5.3
            },
            {
                user_id: 0,
                full_name: 'Linda Smith',
                score: 722,
                credit_limit: 360,
                credit_used: 295,
                credit_available: 65,
                interest_rate: 5.35
            }
        ]
    }
    onResize(event){
        Plotly.Plots.resize(this.gd);
    }
    readOptionNumber(event){
        console.log(event);
    }
    readOptionDate(event){
        console.log(event);
    }
    loadFlatCard(imagePath) {
        return require(`../../../../common/images/cards/${imagePath}.png`);
    }
}
