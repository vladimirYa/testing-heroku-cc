import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardService } from '../../../../services/common/card/card.service';
import { ChartsService } from '../../../../services/common/charts/charts.service';
import { CommonService } from '../../../../services/common/common.service';

import { chartData } from './shared/data';
declare let Plotly;
declare let require;

@Component({
    selector: 'card-details',
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.less',
        '../../../../common/styles/blocks/table/table.less'
    ]
})

export class BusinessBillingCardDetailsComponent implements OnInit, OnDestroy {

    public chartSelectDates = {
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
    public chartSelectTypes = {
        active: {
            id: 'total-net',
            text: 'Total Net Revenue'
        },
        options: [
            {
                id: 'total-net',
                text: 'Total Net Revenue'
            }
        ]
    }
    readOptionDate(event){
        console.log(event); // here handle
    }
    readOption(event){
        console.log(event);
    }

    constructor(private activatedRoute: ActivatedRoute,
        private cardService: CardService,
        private chartsService: ChartsService,
        private commonService: CommonService) { }
    private sub;
    private cardType;
    private gd;
    private data = chartData;
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
    private trace;
    private currentCardData;
    private currentCard;
    private currentStatements;
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.cardType = params['type'];

            //here will be http request to backend to get data of current customer
        });
        this.data.forEach((item) => {
            if (this.cardType === item.type) {
                this.currentCardData = item;
            }
        });
        this.currentCard = this.cardService.cardByType(this.currentCardData.type);

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
        this.currentStatements = this.currentCardData.statementsData;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onResize(event) {
        Plotly.Plots.resize(this.gd);
    }
    loadFlatCard(imagePath) {
        return require(`../../../../common/images/cards/${imagePath}.png`);
    }
}
