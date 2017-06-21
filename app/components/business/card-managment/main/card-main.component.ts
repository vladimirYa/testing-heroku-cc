import { Component, OnDestroy } from '@angular/core';

import { CardService } from '../../../../services/common/card/card.service';
import { ChartsService } from '../../../../services/common/charts/charts.service';
import { CommonService } from '../../../../services/common/common.service';
import { ModalService } from '../../../../services/modal/modal.service';

import { data } from './shared/data';

declare let require;
declare let Plotly;

@Component({
    selector: 'card-main',
    templateUrl: './card-main.component.html',
    styleUrls: [
        './card-main.component.less',
        '../../../../common/styles/blocks/input/input.less',
        '../../../../common/styles/grid.less',
        '../../../../common/styles/blocks/table/table.less']
})

export class CardMainComponent {

    constructor(private cardService: CardService,
        private commonService: CommonService,
        private chartsService: ChartsService,
        private modalService: ModalService) { }

    private cardsData = [
        {
            type: 'black',
            isAvailable: true,
            credits_issued: 150,
            credits_used: 5994.48,
            credits_available: 650,
            average_rate: 5.45,
            interest_income: 5282.22
        },
        {
            type: 'platinum',
            isAvailable: true,
            credits_issued: 140,
            credits_used: 5914.22,
            credits_available: 632,
            average_rate: 5.02,
            interest_income: 5282.22
        },
        {
            type: 'gold',
            isAvailable: true,
            credits_issued: 133,
            credits_used: 5042.56,
            credits_available: 568,
            average_rate: 5.11,
            interest_income: 4474.56
        },
        {
            type: 'violet',
            isAvailable: true,
            credits_issued: 104,
            credits_used: 4052.34,
            credits_available: 523,
            average_rate: 5.64,
            interest_income: 3522.78
        },
        {
            type: 'blue',
            isAvailable: true,
            credits_issued: 97,
            credits_used: 3964.78,
            credits_available: 442,
            average_rate: 5.75,
            interest_income: 3522.78
        },
        {
            type: 'green',
            isAvailable: false
        },
        {
            type: 'yellow',
            isAvailable: false
        },
        {
            type: 'orange',
            isAvailable: false
        },
    ]
    private totalCardsData = {
        date: 'Apr 1 2017',
        value: 759,
        difference: '2%',
        isIncreased: true
    }
    private averageChargaScore = {
        date: 'Apr 1 2017',
        value: 725,
        difference: '5%',
        isIncreased: true
    }
    private totalCredits = {
        date: 'Apr 1 2017',
        value: 132825,
        difference: '0%',
        isIncreased: true
    }
    private creditsUsed = {
        date: 'Apr 1 2017',
        value: 98750,
        difference: '6%',
        isIncreased: true
    }
    private creditsAvailable = {
        date: 'Apr 1 2017',
        value: 34075,
        difference: '5%',
        isIncreased: true
    }
    private averageInterestRate = {
        date: 'Annual',
        value: '12.59%',
        difference: '0.23%',
        isIncreased: true
    }
    private interestIncome = {
        date: '1 year',
        value: 10072.50,
        difference: '5%',
        isIncreased: true
    }
    private cardChartSelectNumbers = {
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
    private cardChartSelectDates = {
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
    private chartData = data;
    private traces = [];
    private gd;
    private states;
    private layout = {
        showlegend: false,
        barmode: 'stack',
        margin: {
            l: 50,
            t: 0,
            r: 30,
            b: 30
        },
        font: {
            size: 14
        },
        bargap: 0.4, // how to create it adaptive?
        xaxis: {
            // range: this.xrange,
            fixedrange: true,
        },
        yaxis: {
            tickprefix: '$'
        }
    }
    ngOnInit() {

        this.gd = this.chartsService.initFluidLayout('#chart', 96, 100);

        let that = this;
        this.states = this.chartData.map((item) => {
            let currentCard = this.cardService.cardByType(item.type);
            let x = item.x.map(function(dateFormat) {
                return that.chartsService.formatToDate(dateFormat);
            });
            return {
                x,
                y: item.y,
                title: `${this.commonService.capitalize(currentCard.title)} Card`,
                color: currentCard.cardColor,
                breakpoint: currentCard.breakpoint
            }
        });
        this.commonService.bubbleSortPyProp(this.states, 'breakpoint');
        this.traces = this.states.map((item)=>{
            return {
                x: item.x,
                y: item.y,
                type: 'bar',
                name: item.title,
                marker: {
                    color: item.color
                },
            }
        });

        Plotly.plot(this.gd, this.traces, this.layout, { displayModeBar: false });

    }
    readOptionNumber(event){
        console.log(event);
    }
    readOptionDate(event){
        console.log(event);
    }
    onResize(event) {
        Plotly.Plots.resize(this.gd);
    }
    loadFlatCard(imagePath) {
        return require(`../../../../common/images/cards/${imagePath}.png`);
    }

}
